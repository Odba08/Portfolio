import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation, Trans } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            <Trans
              i18nKey='about.intro'
              components={{ 1: <span className='purple' />, 3: <span className='purple' /> }}
            >
              Hi everyone! I'm <span className='purple'>Oscar Bueno</span> from{" "}
              <span className='purple'>Venezuela</span>.
            </Trans>

            <br />
            <Trans i18nKey='about.profession'>
              I’m a <b className='purple'>Web and Mobile Developer</b> with over 3 years of experience creating and
              optimizing scalable applications.
            </Trans>
            <br />
            <Trans i18nKey='about.job'>
              Currently, I work as a developer at <b className='purple'>Servieduca</b>, focusing on improving system
              performance and user experience.
            </Trans>
            <br />
            <br />
            {t("about.hobbiesIntro")}
          </p>

          <ul>
            <li className='about-activity'>
              <ImPointRight /> {t("about.hobby1")}
            </li>
            <li className='about-activity'>
              <ImPointRight /> {t("about.hobby2")}
            </li>
            <li className='about-activity'>
              <ImPointRight /> {t("about.hobby3")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>{t("about.quote")}</p>
          <footer className='blockquote-footer'>{t("about.name")}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
