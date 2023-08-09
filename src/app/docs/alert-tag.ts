import { Schema } from "@markdoc/markdoc";

export const alert: Schema = {
  render: "Alert",
  children: ["paragraph", "tag", "list"],
  attributes: {
    style: {
      type: String,
      default: "note",
      matches: ["danger", "note", "tip", "warning"],
      // errorLevel: "critical",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
