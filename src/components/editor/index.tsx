"use client";

import { CSSProperties, useRef, useState } from "react";

// ICONS
import {
  Italic,
  Bold,
  Quote,
  Heading,
  Link,
  Code,
  Braces,
  List,
  ListOrdered,
  AlignLeft,
  Underline,
  Strikethrough,
  Maximize,
  Save,
} from "lucide-react";

// H1, H2, H3, H4, H5, H6, P, SPAN, SMALL
// A = Link (Tipo: Externo, interno, posição do texto)
// Fonte
// Negrito (100, 200, 300, 400, 500, 600, bold)
// Italico
// Aspas
// Código (Nome nome do arquivo)
// Bloco de código
// Lista pontilhada
// Lista enumerada
// Center / Left / Rigth / Justify
// Riscado
// Sublinhado
// Chebox
// Table
// Imagem (Com Upload)
// Vídeo (Iframe)
// Fórmula matemática
// Diagrama
// Gráfico

// Máximo de caracteres
// Quantidade de palavras
// Quantidade de linhas
// Zoom
// Indices
// Salvar (PDF, DOCX)

export type optionsType = {
  name: string;
  icon: any;
  click: () => void;
  code:
    | "bold"
    | "italic"
    | "quote"
    | "h"
    | "link"
    | "code"
    | "blockCode"
    | "list"
    | "listOrdered"
    | "align"
    | "underline"
    | "strikethrough";
};
export type styleType = {
  editor: CSSProperties;
  header: {
    style: CSSProperties;
    item: {
      events: {
        hover?: {
          backgroundColor?: string;
        };
      };
      style: CSSProperties;
      elements: {
        bold: {
          style: CSSProperties;
          item: CSSProperties;
        };
        italic: {
          style: CSSProperties;
          item: CSSProperties;
        };
        quote: {
          style: CSSProperties;
          item: CSSProperties;
        };
        h: {
          style: CSSProperties;
          item: CSSProperties;
        };
        link: {
          style: CSSProperties;
          item: CSSProperties;
        };
        code: {
          style: CSSProperties;
          item: CSSProperties;
        };
        blockCode: {
          style: CSSProperties;
          item: CSSProperties;
        };
        list: {
          style: CSSProperties;
          item: CSSProperties;
        };
        listOrdered: {
          style: CSSProperties;
          item: CSSProperties;
        };
        align: {
          style: CSSProperties;
          item: CSSProperties;
        };
        underline: {
          style: CSSProperties;
          item: CSSProperties;
        };
        strikethrough: {
          style: CSSProperties;
          item: CSSProperties;
        };
      };
      help: {
        zoom: {
          style: CSSProperties;
          item: CSSProperties;
        };
        save: {
          style: CSSProperties;
          item: CSSProperties;
        };
      };
    };
  };
  body: {
    style: CSSProperties;
  };
};
export default function TextEditor({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const [selected, setSelected] = useState({ start: 0, end: 0 });
  const bodyRef = useRef<HTMLDivElement>(null);
  const style: styleType = {
    editor: {
      borderRadius: "5px",
      backgroundColor: "#fff",
      width: "100%",
    },
    header: {
      style: {
        borderBottom: "solid 1px #929292",
        display: "flex",
        justifyContent: "space-between",
        padding: "3px",
      },
      item: {
        events: {
          hover: {
            backgroundColor: "#e8e5e5",
          },
        },
        style: {
          padding: "5px",
          border: "solid 1px #929292",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "centers",
          marginRight: "5px",
          transition: "background-color 0.2s",
        },
        elements: {
          bold: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          italic: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          quote: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          h: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          link: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          code: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          blockCode: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          list: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          listOrdered: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          align: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          underline: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          strikethrough: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
        },
        help: {
          zoom: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
          save: {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            item: {
              height: "16px",
            },
          },
        },
      },
    },
    body: {
      style: {
        height: "400px",
        padding: "10px",
      },
    },
  };

  const modifyText = (text: string, tagStart: string, tagEnd: string) => {
    if (selected.start === selected.end) return false;
    console.log(selected.start, selected.end);
    const textBodyStart =
      text.slice(0, selected.start) + tagStart + text.slice(selected.start);

    const textBodyEnd =
      textBodyStart.slice(0, selected.end + tagStart.length) +
      tagEnd +
      textBodyStart.slice(selected.end + tagStart.length);

    setSelected({ start: 0, end: 0 });

    return textBodyEnd;
  };

  const boldExec = () => {
    if (bodyRef.current) {
      const textBody = bodyRef.current?.innerHTML;
      console.log(textBody);
      const response = modifyText(textBody, "<strong>", "</strong>");
      if (response) {
        console.log(response);
        bodyRef.current.innerHTML = response;
        onChange(response);
      }
    }
  };
  const ItalicExec = () => {
    if (bodyRef.current) {
      const textBody = bodyRef.current?.innerHTML;
      console.log(textBody);
      const response = modifyText(textBody, "<i>", "</i>");
      if (response) {
        console.log(response);
        bodyRef.current.innerHTML = response;
        onChange(response);
      }
    }
  };

  const element: Array<optionsType> = [
    {
      name: "Fonte",
      icon: Heading,
      code: "h",
      click: () => {},
    },
    {
      name: "Negrito",
      icon: Bold,
      code: "bold",
      click: boldExec,
    },
    {
      name: "Italico",
      icon: Italic,
      code: "italic",
      click: ItalicExec,
    },
    {
      name: "Aspas",
      icon: Quote,
      code: "quote",
      click: () => {},
    },
    {
      name: "Link",
      icon: Link,
      code: "link",
      click: () => {},
    },
    {
      name: "Código",
      icon: Code,
      code: "code",
      click: () => {},
    },
    {
      name: "Bloco de código",
      icon: Braces,
      code: "blockCode",
      click: () => {},
    },
    {
      name: "Lista pontilhada",
      icon: List,
      code: "list",
      click: () => {},
    },
    {
      name: "Lista ordenada",
      icon: ListOrdered,
      code: "listOrdered",
      click: () => {},
    },
    {
      name: "Alinhamento",
      icon: AlignLeft,
      code: "align",
      click: () => {},
    },
    {
      name: "Sublinhado",
      icon: Underline,
      code: "underline",
      click: () => {},
    },
    {
      name: "Riscado",
      icon: Strikethrough,
      code: "strikethrough",
      click: () => {},
    },
  ];

  const handleBody = () => {
    if (bodyRef.current) {
      console.log(bodyRef.current.innerText);
      onChange(bodyRef.current.innerText);
    }
  };

  const checkSelection = () => {
    console.log("test");
  };

  return (
    <div style={style.editor}>
      <div style={style.header.style}>
        <ul className="flex">
          {element.map((Item, index) => (
            <li
              key={index}
              style={{
                ...style.header.item.style,
                ...style.header.item.elements[Item.code].style,
                ...(style.header.item.events?.hover?.backgroundColor && {
                  "--hover-bg-color":
                    style.header.item.events.hover.backgroundColor,
                }),
              }}
              onClick={Item.click}
              className="hover:bg-[var(--hover-bg-color)]"
            >
              <Item.icon style={style.header.item.elements[Item.code].item} />
            </li>
          ))}
        </ul>
        <ul className="flex">
          <li
            style={{
              ...style.header.item.style,
              ...style.header.item.help.zoom.style,
              ...(style.header.item.events?.hover?.backgroundColor && {
                "--hover-bg-color":
                  style.header.item.events.hover.backgroundColor,
              }),
            }}
            className="hover:bg-[var(--hover-bg-color)]"
          >
            <Save style={style.header.item.help.zoom.item} />
          </li>
          <li
            style={{
              ...style.header.item.style,
              ...style.header.item.help.zoom.style,
              ...(style.header.item.events?.hover?.backgroundColor && {
                "--hover-bg-color":
                  style.header.item.events.hover.backgroundColor,
              }),
            }}
            className="hover:bg-[var(--hover-bg-color)]"
          >
            <Maximize style={style.header.item.help.zoom.item} />
          </li>
        </ul>
      </div>
      <div
        ref={bodyRef}
        style={style.body.style}
        className="focus:outline-none"
        contentEditable={true}
        onMouseUp={checkSelection}
        onKeyUp={checkSelection}
        onInput={handleBody}
      ></div>
      <div></div>
    </div>
  );
}
