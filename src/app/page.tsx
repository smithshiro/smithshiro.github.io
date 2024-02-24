import TimelineItem from "@/components/atoms/TimelineItem";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200 p-4 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl mb-4">Smith Portfolio</h1>
      {/* 自己紹介 */}
      <div className="md:max-w-[80%] mx-auto w-full mb-4 bg-white shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Shiro Mise</div>
          <p className="text-gray-700 text-sm">
            ウェブ開発が専門でフロントエンドからバックエンドまで幅広く経験を積んできました。<br />
            プロジェクトに取り組む際には、クライアントの要望に真摯に向き合い、満足いただけるソリューションを提供することを心がけております。
          </p>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Pros</div>
            <ul className="text-sm">
              <li>機能開発</li>
              <li>データ設計</li>
              <li>UI/UX改善</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Hobby</div>
            <ul className="text-sm">
              <li>サウナ</li>
              <li>ゲーム</li>
              <li>漫画</li>
              <li>筋トレ</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Skill Set */}
      <div className="md:max-w-[80%] mx-auto w-full mb-4 bg-white shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Skill Set</div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Language</div>
            <ul className="text-sm">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>Ruby</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Framework & Library</div>
            <ul className="text-sm">
              <li>Vue.js(Nuxt.js)</li>
              <li>React.js(Next.js)</li>
              <li>jQuery</li>
              <li>Laravel</li>
              <li>CakePHP</li>
              <li>Ruby on Rails</li>
            </ul>
          </div> 
          <div className="my-4">
            <div className="text-md mb-2 border-b">Database</div>
            <ul className="text-sm">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Firestore</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Infrastructure</div>
            <ul className="text-sm">
              <li>AWS</li>
              <li>Sakura VPS</li>
              <li>Heroku</li>
              <li>Vercel</li>
              <li>Netfily</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Other tool</div>
            <ul className="text-sm">
              <li>Docker</li>
              <li>Nginx</li>
              <li>Apache</li>
              <li>Swagger</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="md:max-w-[80%] mx-auto w-full bg-white shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Project History</div>
        </div>
        <ol className="relative ml-4 border-s border-gray-200 dark:border-gray-700">                  
            <TimelineItem
              title="電動キックボードシェアリングサービス"
              tasks={[
                "Vue2からVue3への移行",
                "管理画面のUI/UX改善",
                "データ設計",
                "不具合改修"
              ]}
              skills={[
                "Vue.js(Nuxt.js)",
                "CSS(scss, bem)",
                "Firebase(FireStore, CloudStrage, Authentication)"
              ]}
              time="April, 2024"
              isLatest={true}
            />
            <TimelineItem
              title="ナイトワークのキャスト向けのサービス"
              tasks={[
                "コンテンツの一部を新プロジェクトに移行",
                "キャストのプロフィール機能のリニューアル",
                "データ設計",
                "UI/UX改善",
                "不具合改修"
              ]}
              skills={[
                "TypeScript(Next.js)",
                "JavaScript(jQuery)",
                "PHP(Laravel, CakePHP)",
                "CSS(scss, tailwindcss)",
                "MySQL"
              ]}
              time="April, 2024"
              isLatest={true}
            />
            <TimelineItem
              title="オンライン英会話サービス"
              tasks={[
                "新機能開発",
                "Vue2からVue3への移行",
                "データ設計",
                "UI/UX改善",
                "不具合改修"
              ]}
              skills={[
                "TypeScript(Next.js, Nuxt.js)",
                "Ruby(Ruby on Rails)",
                "Protocol Buffer",
                "CSS(scss, Vuetify)",
                "MySQL"
              ]}
              time="April, 2023"
            />
            <TimelineItem
              title="児童向けオンライン学習サービス"
              tasks={[
                "UI/UX改善",
                "APIのドキュメント化",
                "不具合改修"
              ]}
              skills={[
                "TypeScript(Nuxt.js, CanvaJS)",
                "PHP(Laravel)",
                "CSS(scss, Vuetify)",
                "PostgreSQL"
              ]}
              time="October, 2022"
            />
            <TimelineItem
              title="インフルエンサーを活用した商品宣伝サービス"
              tasks={[
                "Pringを利用した決済機能の実装",
                "TrustDogを利用した本人確認機能の実装",
                "データ設計",
                "UI/UX改善",
                "ソースコードレビュー"
              ]}
              skills={[
                "JavaScript(Vue.js, Nuxt.js, jQuery)",
                "PHP(Laravel)",
                "CSS(scss, Quasar, Ant)",
                "MySQL"
              ]}
              time="Feburary, 2022"
            />
            <TimelineItem
              title="地方企業を対象とした情報共有プラットフォームサービス"
              tasks={[
                "認証機能をAWS(Cognito)へ移行",
                "インフラ構築のドキュメント作成",
                "新機能開発",
                "ソースコードレビュー"
              ]}
              skills={[
                "TypeScript(Next.js)",
                "PHP(Laravel)",
                "CSS(scss, Ant, material-ui)",
                "MySQL"
              ]}
              time="July, 2021"
            />
            <TimelineItem
              title="イベント関連のプラットフォームサービス"
              tasks={[
                "オンラインチケット販売機能の実装",
                "Tencent Cloudを利用した動画配信機能の実装",
                "イベント会場のGoogleMapタイル画像生成機能の実装",
                "独自ドメイン機能の実装",
                "不具合改善",
                "データ設計",
                "ソースコードレビュー"
              ]}
              skills={[
                "JavaScript(Nuxt.js, jQuery)",
                "PHP(Laravel)",
                "CSS(scss, Vuetify)",
                "MySQL",
                "Firebase(Firestore)"
              ]}
              time="Feburary, 2021"
            />
            <TimelineItem
              title="アイスクリーム販売店の広告サービス"
              tasks={[
                "通知処理のクエリ改善",
                "不具合改善",
              ]}
              skills={[
                "JavaScript(jQuery)",
                "PHP(CakePHP)",
                "MySQL",
              ]}
              time="November, 2018"
            />
        </ol>
      </div>
      {/* Works */}
      <div className="md:max-w-[80%] my-4 mx-auto w-full mb-4 bg-white shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Works</div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">E-Neta-Houko</div>
            <p className="text-sm mb-2">URL: <a className="underline" href="https://e-neta-houko.com" target="_blank">https://e-neta-houko.com</a></p>
            <p className="mb-2 text-xs text-gray-400">ネットで見かけるネタ画像の元ネタまとめサービス</p>
          </div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Emovee</div>
            <p className="text-sm mb-2">URL: <a className="underline" href="https://emovee.org" target="_blank">https://emovee.org</a></p>
            <p className="mb-2 text-xs text-gray-400">Youtubeの動画リストを作成してシェアするサービス</p>
          </div>
        </div>
      </div>
      {/* Blog */}
      <div className="md:max-w-[80%] my-4 mx-auto w-full mb-4 bg-white shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Blog</div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Shiro Secret Base</div>
            <p className="text-sm mb-2">URL: <a className="underline" href="https://shiro-secret-base.com" target="_blank">https://shiro-secret-base.com</a></p>
            <p className="mb-2 text-xs text-gray-400">技術ブログ</p>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="md:max-w-[80%] my-4 mx-auto w-full mb-4 bg-white shadow-md rounded-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Contact</div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Email</div>
            <p className="text-sm mb-2">shirosmith1793アットgmail.com</p>
            <p className="mb-2 text-xs text-gray-400">(アットを@に変換)</p>
          </div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">X(Twitter)</div>
            <p className="text-sm mb-2 underline"><a href="https://twitter.com/smith39871365" target="_blank">smith39871365</a></p>
          </div>
          <div className="my-4">
            <div className="text-md mb-2 border-b">Github</div>
            <p className="text-sm mb-2 underline"><a href="https://github.com/smithshiro" target="_blank">smithshiro</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
