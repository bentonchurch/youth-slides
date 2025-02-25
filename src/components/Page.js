function Page({ title, children }) {
  return (
    <main class="body-column">
        <h1>{ title }</h1>
        {children}
    </main>
  );
}

export { Page };
