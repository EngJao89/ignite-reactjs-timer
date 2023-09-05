import { Button } from "./components/Button";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Ignite Timer</h1>
      <Button variant='primary' />
      <Button variant='primary' />
      <Button variant='primary' />
      <Button variant='primary' />
      <Button variant='primary' />
    </ThemeProvider>
  )
}
