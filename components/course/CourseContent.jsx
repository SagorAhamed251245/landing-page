import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Divider, Empty, Modal, Segmented, Tabs, Typography } from "antd";
import TreeNode from "./TreeNode";

const { Text } = Typography;

// function formatCompactDuration(seconds) {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

//   const result = [];

//   if (hours > 0) {
//     result.push(hours + "h");
//   }

//   if (minutes > 0 || (hours > 0 && seconds % 3600 === 0)) {
//     result.push(minutes + "m");
//   }

//   if (remainingSeconds > 0 && hours === 0 && minutes === 0) {
//     result.push(remainingSeconds + "s");
//   }

//   if (seconds === 0) {
//     return "0s";
//   }

//   return result.join(" ");
// }

function secondsToHours(seconds) {
  const hours = seconds / 3600;
  return hours >= 1 ? Math.floor(hours) : hours.toFixed(2);
}

const RenderTranscription = ({ data }) => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs([]);
    if (data?.summary) {
      setTabs((prev) => [
        ...prev,
        {
          title: "Summary",
          content: data?.summary,
        },
      ]);
    }

    if (data?.interview) {
      setTabs((prev) => [
        ...prev,
        {
          title: "Interview Q&As",
          content: data?.interview,
        },
      ]);
    }

    if (data?.behavioral) {
      setTabs((prev) => [
        ...prev,
        {
          title: "Behavioral Q&As",
          content: data?.behavioral,
        },
      ]);
    }

    if (data?.implementation) {
      setTabs((prev) => [
        ...prev,
        {
          title: "Technical Implementation",
          content: data?.implementation,
        },
      ]);
    }
  }, [data]);

  if (tabs.length === 0) {
    return <></>;
  }

  return (
    <Tabs defaultActiveKey={tabs[0]?.title || ""}>
      {tabs.map((tab, i) => (
        <Tabs.TabPane tab={tab?.title || ""} key={i}>
          <Text style={{ whiteSpace: "pre-wrap" }}>{tab.content || ""}</Text>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

const CourseContent = ({ program }) => {
  const [selectedPreview, setSelectedPreview] = useState(null);
  const [chapters, setChapters] = useState({});
  const [seeMore, setSeeMore] = useState(6);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [totalDuration, setTotalDuration] = useState(undefined);
  const [totalChapter, setTotalChapter] = useState(undefined);
  const [totalLesson, setTotalLesson] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(program)

  function buildTreeView(chapters) {
    const nodes = {};

    chapters.forEach((item) => {
      nodes[item._id] = { ...item, children: [], firstParent: false };
    });

    const tree = [];

    chapters.forEach((item) => {
      if (item.myCourse.parent) {
        if (nodes[item.myCourse.parent]) {
          nodes[item.myCourse.parent].children.push(nodes[item._id]);
        }
      } else {
        tree.push(nodes[item._id]);
        nodes[item._id].firstParent = true;
      }
    });

    return tree;
  }

  console.log(chapters)

  useEffect(() => {
    if (program) {
      const data = {
        courseId: program._id,
        fields: ["chapters"],
      };


      if (!selectedCategory) {
        data.fields = [...data.fields, "categories"];
      }

      if (totalDuration === undefined) {
        data.fields = [...data.fields, "totalDuration"];
      }

      if (totalChapter === undefined) {
        data.fields = [...data.fields, "totalChapter"];
      }

      if (totalLesson === undefined) {
        data.fields = [...data.fields, "totalLesson"];
      }

      if (selectedCategory) {
        if (chapters[selectedCategory]) {
          return;
        }
        data.categoryId = selectedCategory;
      }

      setLoading(true);
            console.log(data)

      axios
        .post("https://api.bootcampshub.ai/course/chapterv2/preview", data)
        .then((res) => {
          const results = res.data?.results;
          if (results.categories) {
            setCategories(results.categories);
          }

          if (results.totalDuration) {
            setTotalDuration(results.totalDuration);
          }

          if (results.totalChapter) {
            setTotalChapter(results.totalChapter);
          }

          if (results.totalLesson) {
            setTotalLesson(results.totalLesson);
          }

          if (results.chapters) {
            const processedChapters = results.chapters?.chapters.map(
              (chapter) => ({
                title: chapter?.lesson?.title || chapter?.chapter?.name,
                key: chapter._id,
                isLeaf:
                  chapter.type === "chapter"
                    ? !chapter?.isPreview
                    : chapter.type !== "chapter",
                ...chapter,
              })
            );

            setChapters((prev) => ({
              ...prev,
              [results.chapters?.selectedCategory]:
                buildTreeView(processedChapters),
            }));

            if (!selectedCategory) {
              setSelectedCategory(results.chapters?.selectedCategory);
            }
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  }, [program, selectedCategory]);



  useEffect(()=>{
    axios.post("https://api.bootcampshub.ai/course/chapterv2/preview").then(res=>console.log(res)).catch(err=>console.log(err))
  },[])

  const handleSeeMore = () => {
    setSeeMore(seeMore + 6);
  };
  const handleSeeLess = () => {
    setSeeMore(6);
  };

  return (
    <div className="courseContent">
      <div className="container">
        <h2>Course Content</h2>
        <p className="desc">
          {totalChapter} chapters • {totalLesson} lectures •{" "}
          {secondsToHours(totalDuration)}h total length
        </p>

        <div className="accordion">
          <div className="beta_lesson_container">
            <Segmented
              options={categories.map((category) => ({
                value: category?._id,
                label: category?.name,
              }))}
              size="large"
              block
              value={selectedCategory}
              onChange={(value) => {
                setSelectedCategory(value);
              }}
            />

            <div style={{ marginTop: "31px" }}>
              {loading ? (
                <Card loading={loading} />
              ) : chapters[selectedCategory]?.length === 0 ? (
                <Empty description="No chapters found" />
              ) : (
                <>
                  {chapters[selectedCategory]?.length > 0 &&
                    chapters[selectedCategory]
                      ?.slice(0, seeMore)
                      .map((node) => (
                        <TreeNode
                          key={node?._id}
                          setSelectedPreview={setSelectedPreview}
                          nodeData={node}
                        />
                      ))}
                </>
              )}
            </div>
          </div>

          {chapters[selectedCategory]?.length > 6 && (
            <div style={{ marginTop: "40px" }}>
              {seeMore < chapters[selectedCategory]?.length ? (
                <button onClick={handleSeeMore} className="default_button">
                  See More
                </button>
              ) : (
                <button onClick={handleSeeLess} className="default_button">
                  See Less
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <Modal
        open={selectedPreview}
        onCancel={() => setSelectedPreview(null)}
        footer={null}
        width={800}
        className="preview_modal"
        title={selectedPreview?.lesson?.title}
      >
        <div className="iframe_container">
          <iframe
            frameborder="0"
            className="iframe"
            src={selectedPreview?.lesson?.url}
            allowFullScreen
          ></iframe>
        </div>

        <Divider />
        <RenderTranscription data={selectedPreview?.lesson?.data} />
      </Modal>
    </div>
  );
};

export default CourseContent;
