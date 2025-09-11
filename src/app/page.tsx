// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">自己紹介</h2>
        <p>
          ソフトウェア工学を専門とする修士学生です。生成AIとWeb検索の開発支援効果の研究や、
          Discord Botの受託開発を行ってきました。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">プロジェクト</h2>
        <div className="border rounded-lg p-4 shadow-md">
          <Image
            src="/discordbot.png"
            alt="Discord Bot Project"
            width={800}
            height={400}
            className="rounded"
          />
          <h3 className="text-xl font-bold mt-4">Discord Bot 開発</h3>
          <p className="mt-2">
            要件定義から設計・実装・運用まで一貫して担当。
            顧客とのヒアリング力と安定した保守運用を強みとしています。
          </p>
        </div>
      </section>
    </main>
  );
}
