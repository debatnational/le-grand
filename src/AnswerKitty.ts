const answers = [
  "C'est bien, tu t'es exprimé, tu peux partir maintenant.",
  "Le gourvernement t'écoute ! C'est cool hein ?",
  "Oui c'est pas faux.",
  "Nan mais je comprends.",
  "C'est dur la vie.",
  "Ouais j'y réfléchis !",
  "Ce sera dans mon prochain programme électoral. N'hésite pas à voter pour moi !",
  "Nan mais tu te rends pas compte, on va pas tout défaire !",
  "J'aurais bien voulu mais j'ai poney.",
  "Alors, attends que je t'explique. C'est ma faute, j'ai pas été assez pédagogue.",
  "Moi j'aime la France.",
  "C'est une bonne situation, ça citoyen ?",
  "Moi si je devais résumer ma vie, aujourd'hui, avec vous, je dirais que c'est d'abord des rencontres.",
  "Change d'abord de couleur de gilet, après on discute !"
];

export const nextAnswer = sugg =>
  sugg.toLowerCase().indexOf("isf") !== -1
    ? "VOUS ME CASSEZ LES POMPES AVEC L'ISF !!!!!"
    : answers[Math.floor(Math.random() * answers.length)];
