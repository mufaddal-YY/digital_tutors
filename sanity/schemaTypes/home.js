export default {
  name: "home",
  title: "Home",
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
      name: "subHeadline",
      title: "Sub Headline",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "sectionHead",
      title: "Section Headline",
      type: "string",
    },
    {
      name: "sectionDesc",
      title: "Section Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "whySectionHead",
      title: "Why Us Section Headline",
      type: "string",
    },
    {
      name: "whySectionImage",
      title: "Why us Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "whySectionDesc",
      title: "Why us Section Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "testimonialHead",
      title: "Testimonial Headline",
      type: "string",
    },
    {
      name: "testimonialDesc",
      title: "Testimonial Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "name",
              type: "string",
            },
            {
              name: "review",
              title: "Review",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "ctaHead",
      title: "CTA Headline",
      type: "string",
    },
    {
      name: "ctaDesc",
      title: "Cta Description",
      type: "string",
    },
  ],
};
