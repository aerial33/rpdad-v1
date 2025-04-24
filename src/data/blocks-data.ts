interface Block {
  id: string
  title: string
  description: string
  image?: string
  link: string
}

const Blocks: Block[] = [
  {
    id: "1",
    title: "Features",
    description:
      "Blocks of Features are arranged to create a cohesive and visually appealing design.",
    image: "/images/blocks-design/features.png",
    link: "/blocks-design/features",
  },
  {
    id: "2",
    title: "About",
    description:
      "Blocks of About are arranged to create a cohesive and visually appealing design.",
    image: "/images/blocks-design/about.png",
    link: "/blocks-design/about",
  },
  {
    id: "3",
    title: "Contact",
    description:
      "Blocks of Contact are arranged to create a cohesive and visually appealing design.",
    image: "/images/blocks-design/contact.png",
    link: "/blocks-design/contact",
  },
  {
    id: "4",
    title: "Call to Action",
    description:
      "Blocks of Call to Action are arranged to create a cohesive and visually appealing design.",
    image: "/images/blocks-design/call-to-action.png",
    link: "/blocks-design/call-to-action",
  },
  {
    id: "5",
    title: "Blog",
    description:
      "Blocks of Blog are arranged to create a cohesive and visually appealing design.",
    image: "/images/blocks-design/blog.png",
    link: "/blocks-design/blog",
  },
  {
    id: "6",
    title: "Content",
    description:
      "Blocks of Content are arranged to create a cohesive and visually appealing design.",
    image: "/images/blocks-design/content.png",
    link: "/blocks-design/content",
  },
]

export default Blocks
