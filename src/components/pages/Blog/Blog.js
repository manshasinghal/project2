import React from "react";
import Connect from "../pics/contact.jpg";
import pic from "../pics/b1.jpg";
import pic2 from "../pics/b2.jpg";
import pic3 from "../pics/b3.webp";
import pic4 from "../pics/b4.jpg";
import pic5 from "../pics/b5.png";
import pic6 from "../pics/b6.jpg";
import { motion } from "framer-motion";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Nav from "../Blog/Nav";
import { useEffect, useState } from "react";

export default function Blog() {
 

 

  const blog = [
    {
      image: pic,
      h: "Being able to trust yourself is the strongest component of mental health",
      date: "18 July",
    },
    {
      image: pic2,
      h: "Being able to trust yourself is the strongest component of mental health",
      date: "20 Augest",
    },
    {
      image: pic3,
      h: "Being able to trust yourself is the strongest component of mental health",
      date: "30 september",
    },
    {
      image: pic4,
      h: "Being able to trust yourself is the strongest component of mental health",
      date: "4 October",
    },
    {
      image: pic5,
      h: "Being able to trust yourself is the strongest component of mental health",
      date: "8 November",
    },
    {
      image: pic6,
      h: "Being able to trust yourself is the strongest component of mental health",
      date: "19 December",
    },
  ];

  return (
    <div>
      <Nav />

      <div
        style={{
          backgroundImage: `url(${Connect})`,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 90 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="text-7xl flex justify-center p-48 text-white">
            <strong className="text-blue-600 mr-1">Our</strong>Blog
          </h1>
        </motion.div>
      </div>
      <div >
        <div class="blog">
          <h1 className='text-center text-4xl font-bold mt-9 text-slate-400 relative data-text="Blogs & Articles"'>
            Blogs & Articles
          </h1>
        </div>
        <div className="text-center mt-9 text-xl font-xs">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            facere,<br></br> perspiciatis fugiat magnam eaque, neque distinctio
            laboriosam qui autem quae{" "}
          </p>
        </div>
        <div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16 ml-4 mr-4 mb-4">
            {blog.map(({ image, h, date }) => (
              <div>
                <Link to="/">
                  <img
                    className=" rounded-lg  h-[300px] w-[100%] cursor-pointer transition-transform duration-300 ease-out transform-gpu hover:scale-105"
                    src={image}
                    alt=""
                  />
                </Link>
                <div class="text-center mb-5 font-medium mt-4">{h}</div>
                <div class="text-center font-bold">{date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </div>

  );
}
