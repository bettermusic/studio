export function getItemLabel<T>(item: T, dataLabel?: string): T|string {
  console.log(item, dataLabel); 
  if (!item) {
    return '';
  }
  return dataLabel ? item[dataLabel] : item;
}

export function getItemLabelFromSource(source, item: string, dataLabel: string, dataId: string) {
  console.log(source);
  if (!source) {
    return '';
  }
  const searchSource = source.findIndex(x => x[`${dataId}`] === item);
  return dataLabel ? searchSource[dataLabel] : '';
}

export function getItemValue<T>(item: T, dataId?: string): T {
  return dataId ? item[dataId] : item;
}
