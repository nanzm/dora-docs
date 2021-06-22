import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "易部署",
    imageUrl: "img/1.svg",
    description: (
      <>
        得益于 golang，具有吞吐量高、且轻量、资源占用少、部署简单等特点，支持 docker、二进制包部署。
      </>
    ),
  },
  {
    title: "易使用",
    imageUrl: "img/2.svg",
    description: (
      <>
        控制台使用了大量的图表，对数据可视化展示，sdk接口简单易用，有丰富的类型提示，提供了自定义上报等方式。
      </>
    ),
  },
  {
    title: "低成本",
    imageUrl: "img/3.svg",
    description: (
      <>
        使用阿里云日志服务存储数据，具有一定的
        <Link to="https://help.aliyun.com/document_detail/51097.html?spm=a2c4g.11186623.6.546.2c323c77Q9dghI">
          成本优势
        </Link>
        ，免维护，不用花费太多精力扩容，数据安全性有一定保证。
      </>
    ),
  },
  {
    title: "多功能",
    imageUrl: "img/4.svg",
    description: (
      <>轻量打点功能、构建添加版本信息等、构建参物管理，在未来将会添加更多前端常用功能。</>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  console.log(imageUrl);
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--3", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={styles.titleText}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline} （开发中...）</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={clsx("row", styles.rowCenter)}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
