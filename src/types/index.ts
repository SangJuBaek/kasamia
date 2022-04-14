import React from 'react'

export interface SourceItem {
	id: string
	text: string
	type: string
}

export interface TargetItem {
	text: string
	type: string
  sourceId: string
}

export interface dragItemState {
  value: number
  dragItems: SourceItem[]
  draggedItems: TargetItem[]
  focusItemId: string
}

export interface TargetBoxProp {
  itemObj: SourceItem
  onDrop: (item: any, _item: SourceItem) => void
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface ListDataState {
  listData: any[]
}
