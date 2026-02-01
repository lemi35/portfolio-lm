
export default function Footer() {
    return (
        <footer className="w-full py-6 mt-12 border-t border-muted-foreground/10 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} LM-CS
            </p>
        </footer>
    );
}