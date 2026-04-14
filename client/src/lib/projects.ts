export interface Project {
  id: number;
  nome: string;
  descricao: string;
  tecnologias: string[];
  link: string;
}

export const projetos: Project[] = [
  {
    id: 1,
    nome: "SISTOQUE",
    descricao: "Um sistema inteligente de controle de estoque criado para pequenos comércios e adaptável às Secretarias de Saúde. Focado em organizar a entrada e saída de materiais com eficiência e transparência no cuidado e gestão da saúde.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    link: "#"
  },
  {
    id: 2,
    nome: "SISTOQUE - Módulo Gestão",
    descricao: "Módulo voltado para a gestão administrativa, permitindo o controle rigoroso de insumos médicos e materiais hospitalares, garantindo que nunca falte o essencial para o atendimento.",
    tecnologias: ["JavaScript", "Flexbox", "LocalStorage"],
    link: "#"
  }
];
