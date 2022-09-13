This is a simple package to switch between light and dark themes, and it can also switch the theme depending on the theme of the device.

```
npm run theme-change-react
```

#### CSS

```
  html[data-theme=light] body {
    background-color: white;
  }

  html[data-theme=dark] body {
    background-color: black;
  }
```

#### React

```
import {ChangeThemeProvider, useChangeTheme} from 'theme-change-react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ChangeThemeProvider insertAt='body'>
      <App />
    </ChangeThemeProvider>
  </React.StrictMode>
)

function SwitcherTheme() {
  const {isDarkMode, changeThemeMode} = useChangeTheme()

  return (
    <div>
      Enable dark theme:
      <input
        type='checkbox'
        value={isDarkMode}
        onChange={changeThemeMode}
      />
    </div>
  )
}
```
