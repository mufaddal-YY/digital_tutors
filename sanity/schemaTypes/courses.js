export default {
  name: "courses",
  title: "Courses ",
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
      name: "courseName",
      title: "Course Name",
      type: "string",
    },
    {
      name: "subHeadline",
      title: "Sub Headline",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "courseName",
        maxLength: 96,
      },
    },
    {
      name: "courseThumb",
      title: "Course Thumbnail",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "videoLink",
      title: "Video Link",
      type: "string",
    },
    {
      name: "courseLink",
      title: "Course Link",
      type: "string",
    },
    {
      name: "whatYouLearn",
      title: "What will you learn",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "courseContent",
      title: "Course Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "courseDescription",
      title: "Course Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
