import Styles from "./databaseChoice.module.css";

function ChoiceButton({
  top,
  right,
  bottom,
  left,
  src,
  href,
  children,
  id,
}: {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  src: string;
  href: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <a
      id={id}
      href={href}
      className={Styles.choiceWrapper}
      style={{
        top,
        right,
        bottom,
        left,
      }}
    >
      <img src={src} />
      {children}
    </a>
  );
}

export function DatabaseChoice() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        background: "url('/database-searching.gif') no-repeat center center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <ChoiceButton
          id="database-choice-fauna"
          top="200px"
          right="100px"
          src="/fauna.png"
          href="/database/fauna"
        >
          <span
            style={{
              position: "absolute",
              bottom: "50%",
              right: "-10px",
              transform: "translate(100%, 0)",
            }}
          >
            _FAUNA //
          </span>
        </ChoiceButton>
        <ChoiceButton
          id="database-choice-flora"
          top="112px"
          left="150px"
          src="/flora.png"
          href="/database/flora"
        >
          <span
            style={{
              position: "absolute",
              top: "-40px",
              transform: "translate(50%, 0)",
            }}
          >
            _FLORA //
          </span>
        </ChoiceButton>
        <ChoiceButton
          id="database-choice-dossier"
          bottom="112px"
          left="150px"
          src="/dossier.png"
          href="/database/dossier"
        >
          <span
            style={{
              position: "absolute",
              bottom: "-10px",
              transform: "translate(50%, 0)",
            }}
          >
            DOSSIER //
          </span>
        </ChoiceButton>
      </div>
    </div>
  );
}
