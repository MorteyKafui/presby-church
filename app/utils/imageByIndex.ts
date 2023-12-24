export const images: string[] = [
  "/images/welcome.jpg",
  "/images/theme.jpg",
  "/images/mission.jpg",
  "/images/values.jpg",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
