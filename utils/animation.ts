// Tạo hiệu ứng cuộn mượt cho một element
export function smoothHorizontalScrolling(element: HTMLElement, to: number, duration: number) {
  if (duration <= 0) {
    return;
  }
  const difference = to - element.scrollLeft;
  const perTick = difference / duration * 10;

  setTimeout(() => {
    element.scrollLeft = element.scrollLeft + perTick;
    if (element.scrollLeft === to) {
      return;
    }
    smoothHorizontalScrolling(element, to, duration - 10);
  }, 10);
}
