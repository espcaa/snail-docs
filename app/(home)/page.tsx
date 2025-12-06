import Link from "next/link";
import { Banner } from "fumadocs-ui/components/banner";
import { Image } from "fumadocs-core/framework";
import { Card } from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <Banner>
        highly experimental, everything can break at any moment \o/
      </Banner>
      <div className="flex flex-col flex-1 justify-center self-center">
        <Image
          src="/icon.png"
          alt="Snail Logo"
          width={128}
          height={128}
          style={{ borderRadius: 24 }}
          className="mb-4 self-center"
        />
        <h1 className="text-6xl font-bold mb-4 text-center">Snail</h1>
        <p className="mb-4 text-center italic text-sm">
          I hate slugs, snails are a little better at least
        </p>
        <div className="flex flex-row gap-4 justify-center mt-8">
          <Card
            title="Write a plugin"
            className="mb-4 p-4"
            href="/docs/plugins/"
          />
          <Card title="Read the docs" className="mb-4 p-4" href="/docs/" />
        </div>
        <div className="flex justify-center">
          <Card title="Install Snail" className=" p-5" href="/docs/install" />
        </div>
      </div>
    </div>
  );
}
