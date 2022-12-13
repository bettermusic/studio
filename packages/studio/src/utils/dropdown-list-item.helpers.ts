export function getItemLabel<T>(item: T, dataLabel?: string, buttonLabel?: string): T|string {
  if (!item) {
    return '';
  }
  if (buttonLabel) {
    return item[buttonLabel]
  }
  if (dataLabel) {
    return item[dataLabel]
  }
  return item;
}

export function getItemLabelFromSource(source, item: string, dataLabel: string, dataId: string) {
  if (!source) {
    return '';
  }
  const searchSource = source.findIndex(x => x[`${dataId}`] === item);
  return dataLabel ? searchSource[dataLabel] : '';
}

export function getItemValue<T>(item: T, dataId?: string): T {
  return dataId ? item[dataId] : item;
}
