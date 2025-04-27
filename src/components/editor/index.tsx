"use client";

import { CSSProperties } from "react";

// H1, H2, H3, H4, H5, H6, P, SPAN, SMALL
// A = Link (Tipo: Externo, interno, posição do texto)
// Negrito (100, 200, 300, 400, 500, 600, bold)
// Italico
// Fonte
// Aspas
// Código (Nome nome do arquivo)
// Bloco de código
// Lista pontilhada
// Lista enumerada
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
      style: CSSProperties;
      elements: {
        bold: CSSProperties;
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
        style: {
          padding: "2px 8px",
          border: "solid 1px #929292",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "centers",
        },
        elements: {
          bold: {
            fontWeight: "bold",
          },
        },
      },
    },
  };
  return (
    <div style={style.editor}>
      <ul style={style.header.style}>
        <li
          style={{
            ...style.header.item.style,
            ...style.header.item.elements.bold,
          }}
        >
          B
        </li>
      </ul>
      <div></div>
      <div></div>
    </div>
  );
}
