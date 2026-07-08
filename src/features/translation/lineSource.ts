import { Language } from "../../shared/lib/languages";

const allLines: Record<Language, string[]> = {
  Korean: [
    "좋은 아침입니다, 성도 여러분. 오늘 주님 앞에 나아가며 우리의 마음을 엽시다.",
    "저와 함께 시편 23편을 펴 봅시다.",
    "여호와는 나의 목자시니 내게 부족함이 없으리로다.",
    "그가 나를 푸른 풀밭에 누이시며 쉴 만한 물 가로 인도하시는도다.",
    "성도 여러분, 오늘 여러분이 무엇을 지나고 있든지, 여러분은 혼자가 아닙니다.",
    "그러므로 믿음과 감사함으로 그분의 약속을 굳게 붙잡읍시다.",
    "테스트 1",
    "테스트 2",
    "테스트 3",
    "테스트 4",
    "테스트 5",
    "테스트 6",
    "테스트 7",
    "테스트 8",
    "테스트 9",
    "테스트 10",
  ],
  English: [
    "Good morning, saints. As we come before the Lord today, let us open our hearts.",
    "Let us turn together to Psalm 23.",
    "The Lord is my shepherd; I shall not want.",
    "He makes me lie down in green pastures; he leads me beside still waters.",
    "Saints, whatever you are going through today, you are not alone.",
    "Therefore, let us hold fast to His promises with faith and thanksgiving.",
    "Test 1",
    "Test 2",
    "Test 3",
    "Test 4",
    "Test 5",
    "Test 6",
    "Test 7",
    "Test 8",
    "Test 9",
    "Test 10",
  ],
  French: [
    "Bonjour, fidèles. Alors que nous venons devant le Seigneur aujourd'hui, ouvrons nos cœurs.",
    "Ouvrons ensemble le Psaume 23.",
    "L'Éternel est mon berger, je ne manquerai de rien.",
    "Il me fait reposer dans de verts pâturages, il me dirige près des eaux paisibles.",
    "Fidèles, quoi que vous traversiez aujourd'hui, vous n'êtes pas seuls.",
    "C'est pourquoi tenons fermement à ses promesses, avec foi et reconnaissance.",
    "Test 1",
    "Test 2",
    "Test 3",
    "Test 4",
    "Test 5",
    "Test 6",
    "Test 7",
    "Test 8",
    "Test 9",
    "Test 10",
  ],
};

export function giveLine(language: Language, index: number): string {
  const lines = allLines[language];
  if (index >= lines.length) return "(out of lines)";
  return lines[index];
}
