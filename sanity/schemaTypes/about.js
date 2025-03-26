export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "metatitle",
      title: "Meta Title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      name: "visionSectionImage",
      title: "Vision Section Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "visionDescription",
      title: "Vision Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "missionDescription",
      title: "Mission Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "valueDescription",
      title: "Value Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
