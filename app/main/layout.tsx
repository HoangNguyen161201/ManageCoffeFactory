export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="border pl-6 pr-6 h-[70px] flex justify-between items-center">
                2
            </div>
            {children}
        </div>
    )
}
