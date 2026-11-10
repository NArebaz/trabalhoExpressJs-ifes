module.exports = `
<style>
  :root {
    --color-bg-base: #f9fafb;
    --color-bg-subtle: #f3f4f6;
    --color-bg-secondary: #e5e7eb;
    --color-bg-surface: rgba(255, 255, 255, 0.94);
    --color-bg-surface-elevated: #ffffff;
    --color-bg-surface-hover: #f9fafb;
    --color-bg-input: #ffffff;

    --color-brand-cobalt: #1d4ed8;
    --color-brand-cobalt-hover: #1e40af;
    --color-brand-cobalt-light: #eff6ff;
    --color-brand-cobalt-subtle: #dbeafe;
    --color-brand-cobalt-glow: rgba(29, 78, 216, 0.18);

    --gradient-brand: linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #1e40af 100%);
    --gradient-button: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
    --gradient-button-hover: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    --gradient-card-top: linear-gradient(90deg, transparent, rgba(29, 78, 216, 0.4), transparent);
    --gradient-text-title: linear-gradient(135deg, #090d16 40%, #1e293b 80%, #1d4ed8 100%);

    --color-text-primary: #090d16;
    --color-text-secondary: #374151;
    --color-text-muted: #6b7280;
    --color-text-faint: #9ca3af;
    --color-text-accent: #1d4ed8;

    --color-border-subtle: #f3f4f6;
    --color-border-light: #e5e7eb;
    --color-border-card: #e5e7eb;
    --color-border-glass-highlight: rgba(255, 255, 255, 0.9);
    --color-border-focus: #1d4ed8;

    --shadow-subtle: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
    --shadow-card: 0 4px 16px -2px rgba(0, 0, 0, 0.04), 0 2px 4px -2px rgba(0, 0, 0, 0.02);
    --shadow-card-hover: 0 16px 32px -8px rgba(29, 78, 216, 0.10), 0 4px 12px -2px rgba(0, 0, 0, 0.03);
    --shadow-glass: 0 10px 28px -4px rgba(15, 23, 42, 0.05);

    --color-success-bg: #f0fdf4;
    --color-success-text: #15803d;
    --color-success-border: #bbf7d0;

    --color-danger-bg: #fef2f2;
    --color-danger-text: #b91c1c;
    --color-danger-border: #fecaca;
    --color-danger-accent: #dc2626;

    --color-warning-bg: #fffbeb;
    --color-warning-text: #b45309;
    --color-warning-border: #fde68a;

    --color-info-bg: #eff6ff;
    --color-info-text: #1d4ed8;
    --color-info-border: #bfdbfe;

    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
    --radius-xl: 18px;
    --content-max-width: 520px;
    --table-max-width: 1040px;
    --transition-fast: 140ms ease;
    --transition-base: 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    padding: 60px 24px;
    background-color: var(--color-bg-base);
    background-image:
      radial-gradient(ellipse 1000px 600px at 50% -80px, rgba(29, 78, 216, 0.06), transparent 70%),
      radial-gradient(circle 800px at 90% 75%, rgba(29, 78, 216, 0.04), transparent 60%),
      radial-gradient(rgba(156, 163, 175, 0.22) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 24px 24px;
    background-attachment: fixed;
    color: var(--color-text-secondary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: "";
    position: fixed;
    top: -120px;
    left: 25%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(29, 78, 216, 0.05) 0%, transparent 70%);
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  .container,
  main,
  .content,
  .wrapper,
  h1, h2, p, hr, ul, form, table {
    position: relative;
    z-index: 1;
    animation: fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  }

  .container,
  main,
  .content,
  .wrapper {
    width: 100%;
    max-width: var(--table-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    display: block;
    width: 100%;
    max-width: 820px;
    margin: 0 auto 10px;
    text-align: center;
    color: var(--color-text-primary);
    font-size: 2.3rem;
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.22;
    background: var(--gradient-text-title);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1::after {
    content: "";
    display: block;
    width: 48px;
    height: 3px;
    margin: 14px auto 0;
    background: var(--color-brand-cobalt);
    border-radius: 9999px;
  }

  h2 {
    display: block;
    width: 100%;
    max-width: 820px;
    margin: 32px auto 16px;
    text-align: center;
    color: var(--color-text-primary);
    font-size: 1.45rem;
    font-weight: 700;
    letter-spacing: -0.025em;
  }

  p {
    display: block;
    width: 100%;
    max-width: 580px;
    margin: 0 auto 28px;
    color: var(--color-text-muted);
    font-size: 1.02rem;
    text-align: center;
    line-height: 1.6;
  }

  hr {
    display: block;
    width: 100%;
    max-width: var(--content-max-width);
    border: 0;
    border-top: 1px solid var(--color-border-light);
    margin: 32px auto;
  }

  a {
    color: var(--color-brand-cobalt);
    font-weight: 600;
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  a:hover {
    color: var(--color-brand-cobalt-hover);
    text-decoration: none;
  }

  body > a,
  .container > a,
  main > a,
  p > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 18px auto 30px;
    padding: 9px 20px;
    background: #ffffff;
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-md);
    color: var(--color-brand-cobalt);
    font-size: 0.92rem;
    font-weight: 600;
    box-shadow: var(--shadow-subtle);
    transition: all var(--transition-fast);
  }

  body > a:hover,
  .container > a:hover,
  main > a:hover,
  p > a:hover {
    background: var(--color-brand-cobalt-light);
    border-color: var(--color-brand-cobalt-subtle);
    color: var(--color-brand-cobalt-hover);
    transform: translateY(-1px);
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: var(--content-max-width);
    margin: 28px auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  li {
    margin: 0;
    width: 100%;
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 18px 22px;
    background: var(--color-bg-surface-elevated);
    border: 1px solid var(--color-border-card);
    border-left: 4px solid var(--color-brand-cobalt);
    border-radius: var(--radius-lg);
    color: var(--color-text-primary);
    font-weight: 600;
    font-size: 1.02rem;
    box-shadow: var(--shadow-card);
    text-decoration: none;
    position: relative;
    transition: all var(--transition-base);
  }

  li a::after {
    content: "Acessar →";
    font-size: 0.86rem;
    font-weight: 600;
    color: var(--color-brand-cobalt);
    margin-left: 16px;
    flex-shrink: 0;
    transition: transform var(--transition-fast), color var(--transition-fast);
  }

  li a:hover {
    transform: translateY(-2px);
    background: #ffffff;
    border-color: var(--color-brand-cobalt-subtle);
    border-left-color: var(--color-brand-cobalt-hover);
    box-shadow: var(--shadow-card-hover);
    color: var(--color-brand-cobalt-hover);
    text-decoration: none;
  }

  li a:hover::after {
    transform: translateX(4px);
    color: var(--color-brand-cobalt-hover);
  }

  form {
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto 32px;
    padding: 36px 34px;
    background: var(--color-bg-surface-elevated);
    border: 1px solid var(--color-border-card);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-glass);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    overflow: hidden;
  }

  form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--color-brand-cobalt);
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    letter-spacing: -0.01em;
    text-align: left;
  }

  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]),
  select,
  textarea {
    display: block;
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--color-border-light);
    border-radius: var(--radius-md);
    background: var(--color-bg-input);
    color: var(--color-text-primary);
    font: inherit;
    font-size: 0.95rem;
    transition: all var(--transition-fast);
  }

  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]):hover,
  select:hover,
  textarea:hover {
    border-color: #cbd5e1;
  }

  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]):focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: var(--color-border-focus);
    box-shadow: 0 0 0 3px var(--color-brand-cobalt-glow);
    background: #ffffff;
    color: var(--color-text-primary);
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-text-faint);
  }

  input[type="checkbox"],
  input[type="radio"] {
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: var(--color-brand-cobalt);
    cursor: pointer;
    vertical-align: middle;
  }

  button,
  input[type="submit"] {
    width: 100%;
    padding: 13px 20px;
    background: var(--color-brand-cobalt);
    color: #ffffff;
    border: none;
    border-radius: var(--radius-md);
    font: inherit;
    font-size: 0.96rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    cursor: pointer;
    box-shadow: 0 2px 8px var(--color-brand-cobalt-glow);
    transition: all var(--transition-base);
    margin-top: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  button:hover,
  input[type="submit"]:hover {
    background: var(--color-brand-cobalt-hover);
    box-shadow: 0 4px 14px var(--color-brand-cobalt-glow);
    transform: translateY(-1px);
  }

  button:active,
  input[type="submit"]:active {
    transform: translateY(0);
  }

  button:focus-visible {
    outline: 2px solid var(--color-brand-cobalt);
    outline-offset: 2px;
  }

  button.btn-danger,
  form[action*="delet"] button,
  form[action*="exclui"] button {
    background: var(--color-danger-bg);
    color: var(--color-danger-text);
    border: 1px solid var(--color-danger-border);
    box-shadow: none;
  }

  button.btn-danger:hover,
  form[action*="delet"] button:hover,
  form[action*="exclui"] button:hover {
    background: var(--color-danger-accent);
    color: #ffffff;
    border-color: var(--color-danger-accent);
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
  }

  table {
    width: 100%;
    max-width: var(--table-max-width);
    margin: 28px auto;
    border-collapse: separate;
    border-spacing: 0;
    background: var(--color-bg-surface-elevated);
    border: 1px solid var(--color-border-card);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-card);
  }

  th, td {
    padding: 15px 18px;
    border: none;
    border-bottom: 1px solid var(--color-border-subtle);
    text-align: left;
    font-size: 0.93rem;
    vertical-align: middle;
  }

  th {
    background: #f9fafb;
    color: var(--color-text-muted);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--color-border-light);
  }

  th:first-child,
  td:first-child {
    text-align: center;
    width: 70px;
  }

  th:last-child,
  td:last-child {
    text-align: center;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr td {
    color: var(--color-text-secondary);
    transition: background-color var(--transition-fast);
  }

  tr:hover td {
    background: #f9fafb;
    color: var(--color-text-primary);
  }

  td a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 13px;
    border-radius: var(--radius-sm);
    font-size: 0.85rem;
    font-weight: 600;
    margin: 2px 4px;
    vertical-align: middle;
  }

  td a[href*="edit"] {
    background: var(--color-brand-cobalt-light);
    color: var(--color-brand-cobalt);
    border: 1px solid var(--color-brand-cobalt-subtle);
  }

  td a[href*="edit"]:hover {
    background: var(--color-brand-cobalt);
    color: #ffffff;
    border-color: var(--color-brand-cobalt);
    text-decoration: none;
  }

  td form {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 2px 4px;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    vertical-align: middle;
  }

  td form button {
    width: auto;
    padding: 6px 13px;
    font-size: 0.85rem;
    margin: 0;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    vertical-align: middle;
  }

  .badge-disponivel,
  .badge-success {
    background: var(--color-success-bg);
    color: var(--color-success-text);
    border: 1px solid var(--color-success-border);
  }

  .badge-emprestado,
  .badge-danger {
    background: var(--color-danger-bg);
    color: var(--color-danger-text);
    border: 1px solid var(--color-danger-border);
  }

  .badge-pendente,
  .badge-warning {
    background: var(--color-warning-bg);
    color: var(--color-warning-text);
    border: 1px solid var(--color-warning-border);
  }

  .layout-wrapper {
    display: flex;
    width: 100%;
    min-height: 100vh;
    gap: 24px;
    max-width: 1280px;
    margin: 0 auto;
    align-items: flex-start;
  }

  .sidebar {
    width: 260px;
    flex-shrink: 0;
    background: #ffffff;
    border: 1px solid var(--color-border-card);
    border-radius: var(--radius-xl);
    padding: 24px 18px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: var(--shadow-card);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    width: 100%;
    max-width: var(--table-max-width);
    margin: 20px auto 32px;
  }

  .stat-card {
    background: #ffffff;
    border: 1px solid var(--color-border-card);
    border-radius: var(--radius-md);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    box-shadow: var(--shadow-card);
    transition: all var(--transition-base);
  }

  .stat-card:hover {
    transform: translateY(-2px);
    border-color: var(--color-brand-cobalt-subtle);
    box-shadow: var(--shadow-card-hover);
  }

  .stat-card .stat-value {
    font-size: 1.85rem;
    font-weight: 800;
    color: var(--color-text-primary);
  }

  .stat-card .stat-label {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    body {
      padding: 36px 16px;
    }

    h1 {
      font-size: 1.85rem;
    }

    form {
      padding: 26px 18px;
    }

    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    th, td {
      padding: 12px 14px;
    }

    .layout-wrapper {
      flex-direction: column;
    }

    .sidebar {
      width: 100%;
    }
  }
</style>
`;
