"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 300,
      damping: 30,
      mass: 0.5,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 300,
      damping: 30,
      mass: 0.5,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative mx-auto h-full w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
      style={{
        willChange: "transform",
      }}
    >
      <div className="absolute top-3 -left-1 sm:-left-2 md:-left-4 lg:-left-20">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
            ease: "easeOut",
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-netural-200 ml-[27px] flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full border shadow-sm"
          style={{
            willChange: "transform, box-shadow",
          }}
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
              ease: "easeOut",
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#10b981",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#059669",
            }}
            className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="16"
          height={svgHeight}
          className="ml-3 sm:ml-4 block"
          aria-hidden="true"
          style={{
            willChange: "transform",
          }}
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
              ease: "linear",
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
              ease: "linear",
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div 
        ref={contentRef} 
        className="w-full"
        style={{
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}; 