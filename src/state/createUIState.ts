import { UIStateContext } from "context/uiState"


interface State {
  menu: {
    openMenuItems: Array<string>
    setOpenMenuItems: (items: Array<string>) => void
  }
}

const createUIState = (state: State): UIStateContext => {
  const { openMenuItems, setOpenMenuItems } = state.menu
  return {
    isMenuItemOpen: link => openMenuItems.includes(link),
    toggleMenuItem(link: string) {
      if (openMenuItems.includes(link)) {
        setOpenMenuItems(openMenuItems.filter(l => l !== link))
      } else {
        setOpenMenuItems([...new Set([...openMenuItems, link])])
      }
    },
    initURL(url) {
      let parts = url.split(`/`).filter(Boolean)
      const links = []
      while (parts.length) {
        links.push(parts.join(`/`))
        parts.pop()
      }
      setOpenMenuItems(links)
    },
  }
}

export default createUIState
