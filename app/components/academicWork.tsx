"use client";

import { useState } from "react";
import SectionHeader from "./sectionHeader";
import CardLink from "./cardLink";
import CardPreview from "./cardPreview";
import CardBody from "./cardBody";

export default function AcademicWork() {
  const [expanded, setExpanded] = useState(false);

  const projects = [
    {
      key: "ar",
      content: (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition hover:border-black dark:hover:border-white">
          <CardPreview
            type="image"
            src="/my-cv/AR_image2.png"
            alt="AR_proj"
          />
          <CardBody
            title="AN INTERACTIVE RESTAURANT MENU"
            description="Designed and evaluated an augmented reality restaurant menu using 3D visualization, gaze interaction, and touchpad input to explore immersive alternatives to traditional menus."
            tags={[
              "Augmented Reality (AR)",
              "Interaction Design",
              "Multimodal Interaction",
              "HCI",
              "UX Research",
              "Usability Evaluation",
              "3D Interface Design",
            ]}
            ctas={[
              {
                label: "Download PDF",
                href: "/my-cv/AugmentedReality_project.pdf",
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "iot",
      content: (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition hover:border-black dark:hover:border-white">
          <CardPreview
            type="image"
            src="/my-cv/IoT_image.png"
            alt="IoT_proj"
          />
          <CardBody
            title="OCCUPANCY DETECTION OF STUDY SPACES"
            description="Built an IoT system that detects occupancy in campus study spaces and visualizes real-time availability through a web interface to help students find free study areas."
            tags={[
              "IoT",
              "P2P",
              "Sensor Integration",
              "Real-Time Data Systems",
              "Web Application Development",
              "System Architecture",
            ]}
            ctas={[
              {
                label: "Download PDF",
                href: "/my-cv/IoT_project.pdf",
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "thesis",
      content: (
        <CardLink href="/my-cv/Speciale_2025_Sofie_Kirk_Nielsen.pdf">
          <CardPreview
            type="iframe"
            src="/my-cv/Speciale_2025_Sofie_Kirk_Nielsen.pdf"
            title="Thesis"
          />
          <CardBody
            title="Exploring the Gap: Exploring the Space Between Digital and Analogue Learning Environments for Neurodivergent Students"
            description="Investigated neurodivergent students’ use of hybrid learning tools through qualitative research grounded in Grounded Theory and Cognitive Load Theory."
            tags={[
              "Neurodiversity Research",
              "Hybrid Learning",
              "Grounded Theory",
              "Cognitive Load Theory",
              "Qualitative Methods",
              "HCI",
              "Artifact Ecologies",
            ]}
            ctas={[
              {
                label: "Download PDF",
                href: "/my-cv/Speciale_2025_Sofie_Kirk_Nielsen.pdf",
              },
            ]}
          />
        </CardLink>
      ),
    },
    {
      key: "infovis",
      content: (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition hover:border-black dark:hover:border-white">
          <CardPreview
            type="iframe"
            src="/my-cv/InfoVis_Project.pdf"
            title="InfoVis"
          />
          <CardBody
            title="Steamy Vampires and a Dirty Dataset"
            description="Built an interactive node-link visualization to explore fantasy sub-genres within a large Goodreads dataset, evaluating design trade-offs and future improvements."
            tags={[
              "D3.js",
              "Network Visualization",
              "Data Cleaning",
              "Interactive UX",
              "Clustering",
              "JSON Processing",
              "Information Visualization",
            ]}
            ctas={[
              {
                label: "View on GitHub",
                href: "https://github.com/hankaspac/info_vis",
              },
              {
                label: "Download PDF",
                href: "/my-cv/InfoVis_Project.pdf",
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "multimodal",
      content: (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition hover:border-black dark:hover:border-white">
          <CardPreview
            type="image"
            src="/my-cv/MM_image.png"
            alt="MM_proj"
          />
          <CardBody
            title="HoloForm: Shaping figures using holograms and thermoplastic"
            description="Developed a system combining 3D scanning, web-based modeling, and holographic visualization to support collaborative remote prototyping with physical objects."
            tags={[
              "Holographic Visualization",
              "Web-Based Modeling",
              "Remote Collaboration",
              "Prototyping Systems",
              "Multimodal Interaction",
            ]}
            ctas={[
              {
                label: "Download PDF",
                href: "/my-cv/MultiModal_project.pdf",
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "physcomp",
      content: (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition hover:border-black dark:hover:border-white">
          <CardPreview
            type="image"
            src="/my-cv/PhysComp_image.jpeg"
            alt="PhysComp_proj"
          />
          <CardBody
            title="Braille Learning Device"
            description="Designed and built a physical computing prototype that teaches Braille to visually impaired children using motorized tactile dots, a rotary encoder interface, and embedded electronics."
            tags={[
              "Physical Computing",
              "Embedded Systems",
              "Arduino / ATmega",
              "Tangible Interfaces",
              "3D Printing & Prototyping",
              "Electronics & PCB Design",
            ]}
            ctas={[
              {
                label: "Download PDF",
                href: "/my-cv/PhysComp_project.pdf",
              },
            ]}
          />
        </div>
      ),
    },
  ];

  const initialVisible = 2;
  const visibleProjects = expanded
    ? projects
    : projects.slice(0, initialVisible);

  return (
    <section id="academic" className="space-y-10">
      <SectionHeader label="Academic Work" />

      <div className="grid gap-8 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <div key={project.key}>{project.content}</div>
        ))}
      </div>

      {projects.length > initialVisible && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
}