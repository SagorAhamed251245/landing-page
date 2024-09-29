import React from "react";
import Markdown from "react-markdown";

export default function MessagePreview({ text }) {
  return <Markdown>{text}</Markdown>;
}
