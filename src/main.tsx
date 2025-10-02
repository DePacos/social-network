import { createRoot } from 'react-dom/client'

import { ProviderComposer, PROVIDERS } from '@/app/providers'

createRoot(document.getElementById('root')!).render(
  <ProviderComposer providers={PROVIDERS} />,
)
