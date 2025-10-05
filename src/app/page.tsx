// app/page.tsx
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 pb-48">
      {/* タイトル */}
      <h1 className="text-5xl font-bold mb-8">
        Discord Bot プロジェクト概要
      </h1>

      {/* 概要 */}
      <p className="mb-8">
        2025年07月11日に納品を完了した Discord Bot プロジェクトをご紹介します。<br />
        ソースコードは以下のGithubにて公開しております<br />
        <a
          href="https://github.com/stayfaaao/Discord_Bot_SnowMonster"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank" 
          rel="noopener noreferrer"
        >
          リポジトリのURL
        </a>
      </p>

      {/* 1. プロジェクトの概要 */}
      <section className="mb-18">
        <h2 className="text-3xl font-bold mb-4">1. プロジェクトの概要</h2>
        <h3 className="text-xl font-semibold mb-4">(開発目的 ・ゴール)</h3>
        <p className="mb-4">
          本プロジェクトは、顧客のDiscordサーバー専用にカスタマイズされたBotを構築することを目的としています。<br />
          顧客は以下のような課題に直面していました。
        </p>
        <ol className="list-disc list-inside space-y-2">
          <li>
            <strong>専用Botの必要性：</strong> 既存の汎用Botでは不十分であり、サーバー特有の運営方針や利用状況に合わせて機能を柔軟に追加・編集できる「専用Bot」を顧客は必要としていました。
          </li>
          <li>
            <strong>機能面での不足：</strong> Discordのデフォルト機能や一般的なBotでは、コミュニティ運営がコミュニティの活性化や管理効率化を図る際に必要な機能が揃っておらず、運営メンバーそれぞれのニーズに応じた対応が困難でした。
          </li>
          <li>
            <strong>セキュリティ上の懸念：</strong> Discordのデフォルト機能では、荒らしや不適切利用といった脅威に十分対応できない場合があり、サーバー特性に合わせたセキュリティ強化策が求められていました。
          </li>
        </ol>
        <p className="mt-4">
        これらの課題を踏まえ、利用者にとって快適で安全な環境を実現するためには、
        新たに専用Botを構築することが不可欠であると判断しました。<br />
        本Botの導入により、メンバーの自然な参加を促進し、管理者の運営負担を軽減することで、
        健全かつ持続可能なコミュニティ運営を支援することを目標としました。
        </p>
      </section>

      {/* 2. 設計・要件定義 */}
      <section className="mb-18">
        <h2 className="text-3xl font-bold mb-4">2. 設計・要件定義</h2>
        <h3 className="text-xl font-semibold mb-4">(実装する機能の概要)</h3>
        <p className="mb-4">
          顧客との合意のもと、以下の機能を実装対象としました。
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>アクティブでないユーザーをリストアップ： </strong>
            一定期間活動していないメンバーを自動抽出し、管理者のみが閲覧可能にすることで休眠アカウントの把握とコミュニティ整理を容易にします。
          </li>
          <li>
            <strong>自動VC作成・削除： </strong>
            ボタン操作でボイスチャットを作成し、未使用または無人状態が一定時間続けば自動削除し、VCの乱立を防止します。
          </li>
          <li>
            <strong>自動ロール付与・解除： </strong>
            ボタン一つでロールを付与/解除（重複チェック付き）し、管理者の手作業を削減します。
          </li>
          <li>
            <strong>ロール確認：</strong>
            ユーザー自身が現在付与されているロールを確認でき、問い合わせ対応の負担を軽減します。
          </li>
        </ul>
      </section>


      {/* 3. 使用した主な技術 */}
      <section className="mb-18">
        <h2 className="text-3xl font-bold mb-4">3. 使用した主な技術</h2>

        <h3 className="text-xl font-semibold mb-2">① Python（discord.py）</h3>
        <p className="mb-2">
          開発のメイン言語としてPythonを採用しました。採用理由は以下の通りです。
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Discord Botの開発にあたり、日本語での参考文献が多い。</li>
          <li>ライブラリとしてPython用のDiscordライブラリである、discord.pyを使用した先人達のプログラムが多くある。</li>
          <li>ソフトウェアの実行速度を優先せず、作成難易度が低いことを取った。</li>
          <li>以前よりPythonを別ソフトの開発に使用していたため、認識があった。</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">② 非同期処理（asyncio）</h3>
        <p className="mb-6">
          Botが複数のタスクを並行に処理する必要があるため、非同期処理を採用しました。これによりソフトウェア全体が複雑化し保守性や安定性が低下しましたが、必要な処理能力を確保できました。

        </p>

        <h3 className="text-xl font-semibold mb-2">③ 外部API（Google Drive API）</h3>
        <p className="mb-6">
          Botが停止した場合や再起動した場合に特定のデータを保持し続けるためにGoogle Drive APIを使用しました。特定のイベントが発生するごとに、JSONファイルをダウンロードし、内容をアップデートした上で再アップロードするワークフローを実装しています。
        </p>

        <h3 className="text-xl font-semibold mb-2">④クラウドホスティングサービス（Railway）</h3>
        <p className="mb-6">
          Botを常時起動するサーバーとしてRailwayを採用しました。採用理由としては以下の点があげられます。
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>GitHubからのデプロイによるセットアップが簡単。</li>
          <li>ノートpcやスマホさえあれば、どこからでもインターネット上でサーバーの状態を確認でき、保守性が高い。</li>
          <li>Discord BotのようなCPUやメモリリソースを大量に使わないソフトウェアはRailwayだと月額のコストが低い。</li>
          <li>自宅に定時起動するPCを置きそれをサーバー化する事も検討したが、
            保守性や安定性を大きく犠牲にしてしまう上、導入・運用コストの削減幅が小さいため、採用しなかった。</li>
        </ul>

      </section>

      {/* 4. 実装した機能 */}
      <section className="mb-18">
        <h2 className="text-3xl font-bold mb-4">4. 実装した機能</h2>
        <p className="mb-6">
          今回はユーザーのニーズを満たすために、主に4つの機能を実装しました。<br />
          それぞれの機能について、機能要件を中心に画像と合わせて簡単に説明いたします。
        </p>

        <h3 className="text-xl font-semibold mb-2">①アクティブでないユーザーをリストアップする機能（フォルダ: checkActive）</h3>
        <p className="">
          ・一定の日数以上Discordサーバーにコメントしていない、もしくはVCに参加していないメンバーをリストアップします。<br />
          ・リストの閲覧は、Discordサーバー内の管理者権限を持つユーザーのみに許可されています。<br />
          ・基本設計としては、Google Drive上のリストを更新することでユーザーと日数を管理します。リストの更新はイベント駆動型となっています。
        </p>
        <Image
          src="/images/active_user_list.webp"
          alt="Discord Botのactive_user_list"
          width={600}
          height={300}
          className="rounded-lg shadow-lg mb-12"
        />

        <h3 className="text-xl font-semibold mb-2">②自動VC作成機能（フォルダ: makeVC）</h3>
        <p className="">
          ・ユーザーがボタンを押すことにより、自動的にボイスチャットを作成し、使用後はそのVCを削除します。<br />
          ・VC作成後、60秒以上参加者がいない場合、そのVCを削除します。<br />
          ・作成されたVCから30秒以上誰もいなくなった場合、そのVCを削除します。
        </p>
        <Image
          src="/images/make_vc.webp"
          alt="Discord Botのactive_user_list"
          width={600}
          height={300}
          className="rounded-lg shadow-lg mb-12"
        />

        <h3 className="text-xl font-semibold mb-2">③自動ロール付与機能（フォルダ: assignRole, assignRuleOK）</h3>
        <p className="">
          ・ユーザーがボタンを押すことにより、自動的にロールを付与します。<br />
          ・同じロールを既に持っている場合はそのロールを外します。
        </p>
        <Image
          src="/images/get_role.webp"
          alt="Discord Botのactive_user_list"
          width={600}
          height={300}
          className="rounded-lg shadow-lg mb-12"
        />

        <h3 className="text-xl font-semibold mb-2">④ロール確認機能（フォルダ: checkRole）</h3>
        <p>
          ・ユーザーがボタンを押すことで、現在付与されているロールを確認できます。
        </p>
        <Image
          src="/images/check_role.webp"
          alt="Discord Botのactive_user_list"
          width={360}
          height={270}
          className="rounded-lg shadow-lg mb-12"
        />
      </section>

      {/* 5. 開発する際に意識したこと */}
      <section className="mb-18">
        <h2 className="text-3xl font-bold mb-4">5. 開発する際に意識したこと</h2>

        <h3 className="text-xl font-semibold mb-2">①機能ごとにモジュール、ファイルを分割を行う</h3>
        <p className="mb-4">
          機能の拡張容易になるように、またエラーが発生時に原因を発見しやすい構造にしました。
        </p>

        <h3 className="text-xl font-semibold mb-2">②読みやすく、理解しやすいコードにする</h3>
        <p className="mb-4">
          「明日の自分は他人」という意識を常に持ち、コードが冗長でコメントが多かったとしても、書き手・読み手がわかりやすくなるよう配慮しました。
          近年はCPUやメモリの制約が比較的少なくなってきたこともあり、可読性を重視することが主流だと考えています。
        </p>

        <h3 className="text-xl font-semibold mb-2">③関数名・変数名は名前を見ただけで機能が分かるようにする</h3>
        <p>
          読みやすく、理解しやすいコードを作るために必要なことだと考えています。自分は英語があまり得意ではないため、
          適切な単語が思いつかない場合は Webサイト 『codic:プログラマーのためのネーミング辞書』{" "}(
          <a
            href="https://codic.jp/engine"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
             https://codic.jp/engine
          </a>
          ){" "}を活用しました。
        </p>
      </section>

      {/* 6. 実装における工夫した部分 */}
      <section className="mb-18">
        <h2 className="text-3xl font-bold mb-4">6. 実装における工夫した部分</h2>

        <h3 className="text-xl font-semibold mb-2">①変数管理</h3>
        <p className="mb-4">
          頻繁に変更が必要な変数や、プログラム外部の状況を反映するような固有変数はすべてconfig.pyにまとめ、管理しやすくしました。
        </p>

        <h3 className="text-xl font-semibold mb-2">②テストに関して</h3>
        <p>
          テスト用として、同様のDiscordサーバーを別途用意し、config.pyの変数だけを変更して確認できるように設計しました。<br />
          具体的には、config.py内の変数を一括コメントアウトするかどうかの作業だけでテストができるようにしています。
        </p>
      </section>

      {/* 7. 実装における苦労した部分 */}
      <section className="mb-18">
        <h2 className="text-3xl font-bold mb-4">7. 実装における苦労した部分</h2>

        <h3 className="text-xl font-semibold mb-2">Google Drive APIに関して</h3>
        <p>
          Google Drive APIは、通常のGoogle DriveのようにアップロードしたファイルをGUIで確認できると想定していたため、
          実際にGUIで確認できないことに気付いたときは、pushやpopの処理が正しく行われているかを把握するのに苦労をしました。<br />
          そこで、本機能とは別にpush専用・pop専用のコードを作成し、動作を個別に検証しました。
        </p>
      </section>

      {/* 8. 次回以降に向けた反省点 */}
      <section className="mb-18">
        <h2 className="text-3xl font-bold mb-4">8. 次回以降に向けた反省点</h2>

        <h3 className="text-xl font-semibold mb-2">①共通部分の関数化</h3>
        <p className="mb-4">
          make_role_message内のそれぞれのボタンを押した際に発生する処理に共通部分が多く、関数化しておくことで保守性を向上させられると考えられます。<br />
          設計当初はここまでボタン数が増えると想定しておらず、共通化を行いませんでした。今後は拡張性を意識した設計を行いたいと思います。<br />
          ただし、拡張する可能性が低い機能にまで拡張性をもたせるのは、開発コストの無駄な増大につながる可能性もあります。このあたりの判断は、ソフトウェア開発の経験を積む中で培う必要があると感じています。
        </p>

        <h3 className="text-xl font-semibold mb-2">②見積もり時点での失敗</h3>
        <p>
          今回は見積もりの段階で詳細設計をある程度固めておらず、コーディングの最中に機能面について顧客へ確認する必要がありました。
          見積もり時にもう少し詳細設計を詰め、その内容を含めた見積もりを提示できればよかったと思います。
        </p>
      </section>


      {/* 補足事項 */}
      <section>
        <h2 className="text-3xl font-bold mb-4">補足事項</h2>
        <p>
          本ソースコードは特定顧客向けに作成したものを公開用に修正しています（顧客名・サーバー名は削除済み）。公開にあたっては顧客の許可を得ています。
        </p>
        <p className="mb-8">
        このポートフォリオサイトのソースコードは以下のGitHubで公開しています。<br />
        <a
          href="https://github.com/stayfaaao/portfolio_site"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank" 
          rel="noopener noreferrer"
        >
          リポジトリのURL
          </a>
        </p>

      </section>
    </main>
  );
}
