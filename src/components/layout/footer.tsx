export default function Footer() {
  return (
    <footer className="bg-card/50">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Cantinho Macramê da Juju. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
