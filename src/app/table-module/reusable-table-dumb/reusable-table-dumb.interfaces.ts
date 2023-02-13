interface ReusableTableDumbColumnInterface<T> {
  title: string
  key: keyof T
}

export type ReusableTableDumbColumnsInterface<T> = ReusableTableDumbColumnInterface<T>[]
