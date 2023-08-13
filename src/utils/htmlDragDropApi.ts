export const onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
  let element = evt.currentTarget;
  element.classList.add("dragged");
  evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
  evt.dataTransfer.effectAllowed = "move";
};

export const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
  evt.currentTarget.classList.remove("dragged");
};

export const onDragEnter = (evt: React.DragEvent<HTMLDivElement>) => {
  evt.preventDefault();
  let element = evt.currentTarget;
  element.classList.add("dragged-over");
  evt.dataTransfer.dropEffect = "move";
};

export const onDragLeave = (evt: React.DragEvent<HTMLDivElement>) => {
  let currentTarget = evt.currentTarget;
  let newTarget = evt.relatedTarget;
  if (
    (newTarget instanceof HTMLElement &&
      newTarget.parentNode === currentTarget) ||
    newTarget === currentTarget
  )
    return;
  evt.preventDefault();
  let element = evt.currentTarget;
  element.classList.remove("dragged-over");
};

export const onDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
  evt.preventDefault();
  evt.dataTransfer.dropEffect = "move";
};

export const onDrop = (evt: React.DragEvent<HTMLDivElement>) => {
  evt.preventDefault();

  evt.currentTarget.classList.remove("dragged-over");
};
