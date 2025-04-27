"use client";

import { CSSProperties } from "react";

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
    };
  };
};
export default function TextEditor() {
  const style: styleType = {
    editor: {
      borderRadius: "5px",
      backgroundColor: "#fff",
      width: "100%",
      height: "400px",
    },
    header: {
      style: {
        borderBottom: "solid 1px #929292",
        display: "flex",
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
      },
    },
  };

  const element: Array<{
    name: string;
    icon: any;
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
  }> = [
    {
      name: "Fonte",
      icon: Heading,
      code: "h",
    },
    {
      name: "Negrito",
      icon: Bold,
      code: "bold",
    },
    {
      name: "Italico",
      icon: Italic,
      code: "italic",
    },
    {
      name: "Aspas",
      icon: Quote,
      code: "quote",
    },
    {
      name: "Link",
      icon: Link,
      code: "link",
    },
    {
      name: "Código",
      icon: Code,
      code: "code",
    },
    {
      name: "Bloco de código",
      icon: Braces,
      code: "blockCode",
    },
    {
      name: "Lista pontilhada",
      icon: List,
      code: "list",
    },
    {
      name: "Lista ordenada",
      icon: ListOrdered,
      code: "listOrdered",
    },
    {
      name: "Alinhamento",
      icon: AlignLeft,
      code: "align",
    },
    {
      name: "Sublinhado",
      icon: Underline,
      code: "underline",
    },
    {
      name: "Riscado",
      icon: Strikethrough,
      code: "strikethrough",
    },
  ];
  return (
    <div style={style.editor}>
      <ul style={style.header.style}>
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
            className="hover:bg-[var(--hover-bg-color)]"
          >
            <Item.icon style={style.header.item.elements[Item.code].item} />
          </li>
        ))}
      </ul>
      <div></div>
      <div></div>
    </div>
  );
}
