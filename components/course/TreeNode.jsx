import formatCompactDuration from "@/utils/formatCompactDuration";
import { notification } from "antd";
import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoMdLock } from "react-icons/io";


const TreeNode = ({ nodeData, setSelectedPreview }) => {
  const [expandedNodes, setExpandedNodes] = useState([]);
  const toggleExpand = (key) => {
    setExpandedNodes((prevNodes) => {
      if (prevNodes.includes(key)) {
        return prevNodes.filter((nodeKey) => nodeKey !== key);
      } else {
        return [...prevNodes, key];
      }
    });
  };
  const isNodeExpanded = (key) => {
    return expandedNodes.includes(key);
  };

  const showNotification = () => {
    notification.info({
      message: "The chapter is locked for you",
      placement: "top",
    });
  };
  const lessons = nodeData?.children?.filter((child) => child.type === "lesson");

  const chapters = nodeData?.children?.filter(
    (child) => child.type === "chapter"
  );
  const totalDuration = lessons?.reduce(
    (acc, lesson) => acc + lesson?.lesson?.duration,
    0
  );

  return (
    <div className="tree_container_root">
      <div
        style={{}}
        className={`${nodeData?.firstParent && "firstParent"} leftLine`}
      >
        <div className="chapter-section">
          <div className="chapter_container">
            <div>
              {nodeData?.type === "chapter" && nodeData?.firstParent && (
                <div
                  className="chapter_title_new"
                  onClick={() => {
                    if (nodeData?.isPreview) {
                      toggleExpand(nodeData.key);
                    }

                    if (!nodeData?.isPreview) {
                      showNotification();
                    }
                  }}
                >
                  <span>
                    {!nodeData?.isPreview ? (
                      <IoMdLock size={26} />
                    ) : (
                      <span>
                        {isNodeExpanded(nodeData.key) ? (
                          <IoIosArrowUp size={26} />
                        ) : (
                          <IoIosArrowDown size={26} />
                        )}
                      </span>
                    )}
                  </span>
                  <h2>{nodeData.title} </h2>
                </div>
              )}
              {nodeData?.type === "chapter" && !nodeData?.firstParent && (
                <div
                  className="chapter_title_new"
                  onClick={() => {
                    if (nodeData?.isPreview) {
                      toggleExpand(nodeData.key);
                    }

                    if (!nodeData?.isPreview) {
                      showNotification();
                    }
                  }}
                >
                  <span>
                    {!nodeData?.isPreview ? (
                      <IoMdLock onClick={() => showNotification()} size={26} />
                    ) : (
                      <span>
                        {isNodeExpanded(nodeData.key) ? (
                          <IoIosArrowUp size={26} />
                        ) : (
                          <IoIosArrowDown size={26} />
                        )}
                      </span>
                    )}
                  </span>
                  <h2>{nodeData.title} </h2>
                </div>
              )}

              {nodeData?.type === "lesson" && (
                <div className="chapter_title_new" onClick={() => {}}>
                  <span>
                    <FaPlayCircle size={26} />
                  </span>
                  <h2> {nodeData.title} </h2>
                </div>
              )}
            </div>
            <div className="right_buttons">
              {nodeData?.type === "lesson" && nodeData.isPreview && (
                <span
                  onClick={() => setSelectedPreview(nodeData)}
                  className="preview_label show"
                >
                  Preview
                </span>
              )}
              {nodeData.type === "chapter" && chapters?.length > 0 && (
                <span className="chapter_count">
                  {chapters.length} chapters.
                </span>
              )}
              {nodeData.type === "chapter" && (
                <span className="duration">{lessons.length} lessons.</span>
              )}
              <span className="duration">
                {formatCompactDuration(totalDuration)}
              </span>
            </div>
          </div>

          {nodeData?.type === "lesson" && nodeData.isPreview && (
            <span
              onClick={() => setSelectedPreview(nodeData)}
              className="preview_label hide"
            >
              Preview
            </span>
          )}
        </div>

        {isNodeExpanded(nodeData.key) && (
          <div className="children_container">
            {nodeData?.children?.map((child) => (
              <TreeNode
                key={child?.key}
                setSelectedPreview={setSelectedPreview}
                nodeData={child}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNode;
