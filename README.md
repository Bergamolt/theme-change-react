```
npm run theme-change-react
```

Example:

```
  html[data-theme=light] body {
    background-color: white;
  }

  html[data-theme=dark] body {
    background-color: black;
  }
```

React

```
import {ThemeProvider, changeThemeMode} from 'theme-change-react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider insertAt='body'>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

function SwitcherTheme() {
  const {isDarkMode, changeThemeMode} = useThemeContext()

  return (
    <div>
      Enable dark theme: <input type='checkbox' value={isDarkMode} onChange={changeThemeMode} />
    </div>
  )
}
```
