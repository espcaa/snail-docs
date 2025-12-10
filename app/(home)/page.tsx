"use client";

import Link from "next/link";
import { Banner } from "fumadocs-ui/components/banner";
import { Image } from "fumadocs-core/framework";
import { useState } from "react";
import { ArrowRight, Zap, BookOpen, Package } from "lucide-react";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      id: "plugin",
      icon: Zap,
      title: "Write a Plugin",
      description: "Create powerful extensions and customize your experience",
      href: "/docs/guides/writing-a-plugin",
    },
    {
      id: "docs",
      icon: BookOpen,
      title: "Read the Docs",
      description: "Comprehensive guides and API documentation",
      href: "/docs/",
    },
    {
      id: "install",
      icon: Package,
      title: "Install Snail",
      description: "Get started in minutes with simple setup",
      href: "docs/getting-started/install",
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      <Banner>
        highly experimental, everything can break at any moment \o/
      </Banner>
      <div className="flex flex-col flex-1 justify-center items-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/icon.png"
            alt="Snail Logo"
            width={140}
            height={140}
            style={{ borderRadius: 24 }}
            className="drop-shadow-sm"
          />
        </div>

        {/* Header */}
        <h1 className="text-6xl font-bold mb-4 text-center">Snail</h1>
        <p className="mb-8 text-center text-sm text-muted-foreground italic">
          I hate slugs, snails are a little better at least
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === feature.id;

            return (
              <Link
                key={feature.id}
                href={feature.href}
                className="group"
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative h-full rounded-lg border bg-card/80 p-6 transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? "border-primary shadow-lg scale-105"
                      : "border-border/50 shadow-sm hover:border-border"
                  }`}
                >
                  {/* Content */}
                  <div className="flex flex-col gap-4">
                    <div
                      className={`inline-flex p-2 rounded-md bg-secondary w-fit transition-transform duration-300 ${
                        isHovered ? "scale-125 rotate-6" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all mt-auto pt-2">
                      Learn more
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href="/docs/install"
          className="px-8 py-3 rounded-lg bg-card/80 border border-border text-foreground font-semibold transition-all hover:shadow-lg hover:scale-105 hover:bg-secondary active:scale-95"
        >
          Quick Start
        </Link>
      </div>
    </div>
  );
}
