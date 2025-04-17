"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { useState } from "react"
import useMeasure from "react-use-measure"

import { Badge } from "@/components/ui/badge"

const CARD_WIDTH = 350
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
}

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure()
  const [offset, setOffset] = useState(0)

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

  const CAN_SHIFT_LEFT = offset < 0

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER)

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return
    }
    setOffset((pv) => (pv += CARD_SIZE))
  }

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return
    }
    setOffset((pv) => (pv -= CARD_SIZE))
  }

  return (
    <section className="py-8 md:py-16 lg:py-24" ref={ref}>
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-6 px-6">
        <div className="flex h-[300px] flex-col justify-between p-6">
          <Badge className="font-sm border-flamingo" variant={"outline"}>
            {"Le collectif"}
          </Badge>
          <h2 className="mb-4 text-3xl text-balance md:text-4xl">
            L'Équipe du RPDAD
          </h2>
          <div className="flex items-center gap-2">
            <button
              className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                CAN_SHIFT_LEFT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_LEFT}
              onClick={shiftLeft}
            >
              <ArrowLeft />
            </button>
            <button
              className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                CAN_SHIFT_RIGHT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_RIGHT}
              onClick={shiftRight}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div
          className="relative overflow-hidden"
          style={{ width: CARD_SIZE * CARD_BUFFER }}
        >
          <motion.div
            animate={{ x: offset }}
            transition={{ ease: "easeInOut" }}
            className="flex"
            style={{ width: CARD_SIZE * posts.length }}
          >
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Post = ({ imgUrl, author, title, description }: PostType) => {
  return (
    <div
      className="border-primary relative shrink-0 cursor-pointer rounded-2xl border p-6 transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs text-neutral-500 uppercase">
        {author}
      </span>
      <p className="mt-1.5 text-lg font-medium">{title}</p>
    </div>
  )
}

export default BlogPostCarousel

type PostType = {
  id: number
  imgUrl: string
  author: string
  title: string
  description: string
}

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/imgs/blog/1.png",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/imgs/blog/2.png",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "/imgs/blog/3.png",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl: "/imgs/blog/4.png",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: "/imgs/blog/5.png",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl: "/imgs/blog/6.png",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl: "/imgs/blog/7.png",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
]
