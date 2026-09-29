document.addEventListener("DOMContentLoaded", () => {
  const btnExport = document.getElementById("btn-export-docx");
  const btnExportFooter = document.getElementById("btn-export-docx-footer");

  // Registro do Service Worker para suporte a PWA (funcionamento offline)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then(
        (reg) => console.log("Service Worker registrado com sucesso:", reg.scope),
        (err) => console.log("Falha ao registrar o Service Worker:", err)
      );
    });
  }

  // Eventos para acionar a exportação em .DOCX
  btnExport.addEventListener("click", exportToDocx);
  btnExportFooter.addEventListener("click", exportToDocx);

  async function exportToDocx() {
    // 1. Leitura dos campos do formulário
    const charData = {
      name: document.getElementById("char-name").value || "Sem Nome",
      role: document.getElementById("char-role").value,
      archetype: document.getElementById("char-archetype").value || "Não informado",
      age: document.getElementById("char-age").value || "Não informado",
      appearance: document.getElementById("char-appearance").value || "Não informado",
      lie: document.getElementById("char-lie").value || "Não informado",
      want: document.getElementById("char-want").value || "Não informado",
      need: document.getElementById("char-need").value || "Não informado",
      ghost: document.getElementById("char-ghost").value || "Não informado",
      secret: document.getElementById("char-secret").value || "Não informado",
      fear: document.getElementById("char-fear").value || "Não informado",
      defense: document.getElementById("char-defense").value,
      voice: document.getElementById("char-voice").value || "Não informado",
      dilemma: document.getElementById("char-dilemma").value || "Não informado"
    };

    // 2. Extração dos métodos da biblioteca docx.js (disponível via CDN global)
    const { Document, Packer, Paragraph, TextRun, HeadingLevel } = window.docx;

    // Construtores auxiliares para manter padrão visual do documento Word
    const createSectionHeader = (title) => new Paragraph({
      text: title,
      heading: HeadingLevel.HEADING_2,
      space: { before: 300, after: 100 }
    });

    const createFieldParagraph = (label, value) => new Paragraph({
      children: [
        new TextRun({ text: `${label}: `, bold: true, color: "2563EB" }),
        new TextRun({ text: value })
      ],
      space: { after: 120 }
    });

    // 3. Montagem da estrutura do documento Word
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: `Ficha de Personagem: ${charData.name}`,
            heading: HeadingLevel.HEADING_1,
            space: { after: 200 }
          }),

          createSectionHeader("1. Dados Básicos & Superfície"),
          createFieldParagraph("Nome", charData.name),
          createFieldParagraph("Papel Narrativo", charData.role),
          createFieldParagraph("Arquétipo Principal", charData.archetype),
          createFieldParagraph("Idade e Ocupação", charData.age),
          createFieldParagraph("Aparência e Postura", charData.appearance),

          createSectionHeader("2. Núcleo Dramático (Querer vs. Precisar)"),
          createFieldParagraph("A Mentira (The Lie)", charData.lie),
          createFieldParagraph("O Querer (Objetivo Externo)", charData.want),
          createFieldParagraph("A Necessidade (Evolução Interna)", charData.need),

          createSectionHeader("3. Camadas Submersas (Iceberg de Hemingway)"),
          createFieldParagraph("O Fantasma do Passado / Trauma", charData.ghost),
          createFieldParagraph("Maior Segredo", charData.secret),
          createFieldParagraph("Medo Primordial", charData.fear),

          createSectionHeader("4. Resposta sob Pressão & Voz"),
          createFieldParagraph("Mecanismo de Defesa Habitual", charData.defense),
          createFieldParagraph("Padrão de Voz e Diálogo", charData.voice),
          createFieldParagraph("Grande Dilema Moral", charData.dilemma)
        ]
      }]
    });

    // 4. Download automático do arquivo .docx gerado no navegador
    try {
      const blob = await Packer.toBlob(doc);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Persona_${charData.name.replace(/\s+/g, "_")}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao gerar arquivo DOCX:", error);
      alert("Ocorreu um erro ao exportar o documento.");
    }
  }
});
