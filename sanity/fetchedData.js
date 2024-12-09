import { groq } from "next-sanity";
import { client } from "./lib/client";

const defaultFetchOptions = { cache: "no-cache" };

export async function getHomeData() {
  const result = await client.fetch(
    groq`*[_type == "home"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         "heroImage": heroImage.asset->url,
         sectionHead,
         sectionDesc,
         whySectionHead,
         "whySectionImage": whySectionImage.asset->url,
         whySectionDesc,
         testimonialHead,
         testimonialDesc,
         testimonials[]{
         name,
         review
         },
         ctaHead,
         ctaDesc
         

        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getAboutData() {
  const result = await client.fetch(
    groq`*[_type == "about"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         content,
         "image": image.asset->url,
         "visionSectionImage": visionSectionImage.asset->url,
         visionDescription,
         missionDescription,
         valueDescription,

        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getCoursesData() {
  const result = await client.fetch(
    groq`*[_type == "courses"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         courseName,
         subHeadline,
         "slug": slug.current,
         "courseThumb": courseThumb.asset->url,
         videoLink,
         courseLink,
         whatYouLearn,
         courseContent,
         courseDescription,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getCoursesDetailData(slug) {
  return client.fetch(
    groq`*[_type == "courses" && slug.current == $slug][0]{
         _id,
         _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         courseName,
         subHeadline,
         "slug": slug.current,
         "courseThumb": courseThumb.asset->url,
         videoLink,
         courseLink,
         whatYouLearn,
         courseContent,
         courseDescription,
        }`,
    { slug, defaultFetchOptions }
  );
}
