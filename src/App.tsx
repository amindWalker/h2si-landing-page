import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        if (subscribed) {
            setTimeout(() => {
                setSubscribed(false);
            }, 5000);
        }
        if (message) {
            setTimeout(() => {
                setMessage("");
            }, 5000);
        }
    }, [subscribed, message]);

    function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!email) {
            setMessage("Digite um e-mail válido.");
            return;
        }

        const emailExists = "";
        // readFileSync('emails.json').includes(email);

        if (emailExists) {
            setMessage("E-mail já cadastrado.");
            return;
        }

        // writeFileSync('emails.json', email);

        setMessage("E-mail cadastrado com sucesso!");
        setSubscribed(true);
    }

    return (
        <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md mx-auto items-center justify-center space-x-2"
        >
            <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Button type="submit" className="active:_btn_click">
                Inscrever-se
            </Button>
            {message && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {message}
                </p>
            )}
            {subscribed && (
                <div className="text-sm text-green-500 dark:text-green-400">
                    E-mail cadastrado com sucesso!
                </div>
            )}
        </form>
    );
}

export default function App() {

    function getCurrentYear(): number {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="grid">
                <nav className="sticky top-0 z-10 w-full bg-background bg-op-50 backdrop-blur-lg ">
                    <div className="flex-center h-[60px] px-4">
                        <div className="flex-center space-x-4">
                            <a
                                href="#"
                                className="flex-center space-x-2 hover:text-yellow-3 text-xl"
                            >
                                <span className="i-mage:light-bulb-electricity mb-1 text-2xl" />
                                <span className="font-semibold text-black <md:hidden">
                                    H2 SI
                                </span>
                            </a>
                            <div className="grid grid-flow-col gap-4 grid-place-items-center">
                                <a href="#solutions">Soluções</a>
                                <a href="#prices">Preços</a>
                                <a href="#subscribe">Benefícios</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="bg-primary/10 px-16 <md:px-8 w-screen -mt-16 <md:-mt-8">
                    <div className="relative w-screen -ml-16 <md:-ml-8">
                        <img
                            alt="Hero"
                            className="object-cover w-full max-h-80vh <md:max-h-40vh"
                            src="https://images.unsplash.com/photo-1552862750-746b8f6f7f25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div className="absolute inset-0 backdrop-blur-md flex justify-center items-center p-4 text-center">
                            <div className="space-y-4">
                                <div className="space-y-2 max-w-[800px] ring-2 ring-black ring-op-50 bg-black bg-op-20 p8 text-white">

                                    <h1 className="font-bebas scroll-m-20 text-4xl font-extrabold tracking-tight md:text-7xl">
                                        Automação. Energia Solar. Carregadores.
                                    </h1>
                                    <small className="text-xs md:text-sm font-medium leading-none">
                                        soluções ultra eficientes
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 drop-shadow-xl">
                        <div className="grid grid-items-center grid-justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-3">
                                <h2 className="text-dark-1 scroll-m-20 border-b pb-2 text-3xl font-extrabold tracking-tight first:mt-0 md:text-5xl">
                                    Soluções
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    A combinação perfeita de eficiência,
                                    segurança e automação.
                                </p>
                            </div>
                            <Tabs defaultValue="comercial" className="max-w-min md:max-w-2xl place-self-center">
                                <TabsList className="bg-secondary/20 ">
                                    <TabsTrigger value="comercial">EMPRESA</TabsTrigger>
                                    <TabsTrigger value="casa">CASA</TabsTrigger>
                                    <TabsTrigger value="ve">VE</TabsTrigger>
                                    <TabsTrigger value="solar">SOLAR</TabsTrigger>
                                    <TabsTrigger value="emergencia">EMERGÊNCIA</TabsTrigger>
                                </TabsList>
                                <TabsContent value="comercial">
                                    <Card className="p-8 <md:p-4 bg-secondary/50">
                                        <CardHeader>
                                            <div className="grid grid-place-items-center">
                                                <CardTitle>Maximize a eficiência operacional da sua empresa</CardTitle>
                                                <span className="i-bi:building-fill-gear scale-150 m-4 text-4xl text-gray-6" />
                                            </div>

                                            <CardDescription>
                                                H2 Sistemas Inteligentes Empresarial
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-left">
                                            <Card className="p-8 mt-8">

                                                <p hidden>automação comercial, soluções empresariais automatizadas, eficiência operacional, redução de custos, gestão de estoque automatizada, segurança empresarial, melhoria da experiência do cliente</p>
                                                <h4 className="scroll-m-20 mt-8 text-xl font-semibold tracking-tight">
                                                    Controle de Acesso de Última Geração
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Reconhecimento facial</li>
                                                    <li>Cartões de acesso inteligentes</li>
                                                    <li>Integração com sistemas de automação predial</li>
                                                </ul>
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    Gestão Eficiente
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Gerenciamento de acesso de funcionários</li>
                                                    <li>Suporte facilitado para visitantes e fornecedores</li>
                                                </ul>

                                            </Card>
                                        </CardContent>
                                        <CardFooter className="grid">
                                            <p className="text-sm text-muted-foreground my-8">
                                                Oferecemos suporte técnico especializado e atendimento personalizado para garantir o funcionamento contínuo dos sistemas
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="active:_btn_click"
                                            >
                                                Saiba mais
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="casa">
                                    <Card className="p-8 <md:p-4 bg-secondary/50">
                                        <CardHeader>
                                            <div className="grid grid-place-items-center">
                                                <CardTitle>Transforme sua casa em um lar inteligente</CardTitle>
                                                <span className="i-solar:smart-home-bold-duotone scale-150 m-4 text-4xl text-gray-6" />
                                            </div>

                                            <CardDescription>
                                                H2 Sistemas Inteligentes Residencial
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-left">
                                            <Card className="p-8 mt-8">
                                                <p hidden>automação comercial, soluções empresariais automatizadas, eficiência operacional, redução de custos, gestão de estoque automatizada, segurança empresarial, melhoria da experiência do cliente</p>
                                                <h4 className="scroll-m-20 mt-8 text-xl font-semibold tracking-tight">
                                                    Segurança Avançada
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Monitoramento por câmeras</li>
                                                    <li>Sistemas de identificação avançados</li>
                                                    <li>Controle de acesso em tempo real</li>
                                                </ul>
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    Gestão Simplificada
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Cadastro fácil de moradores e visitantes</li>
                                                    <li>integração com portarias virtuais e controle de horários</li>
                                                </ul>

                                            </Card>
                                        </CardContent>
                                        <CardFooter className="grid">
                                            <p className="text-sm text-muted-foreground my-8">
                                                Descubra como podemos transformar sua residência em um espaço mais seguro e eficiente. Entre em contato e agende uma consulta
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="active:_btn_click"
                                            >
                                                Saiba mais
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="ve">
                                    <Card className="p-8 <md:p-4 bg-secondary/50">
                                        <CardHeader>
                                            <div className="grid grid-place-items-center">
                                                <CardTitle>Solução universal para carregadores de Veículos Elétricos</CardTitle>
                                                <span className="i-bi:ev-front scale-150 m-4 text-4xl text-gray-6" />
                                            </div>

                                            <CardDescription>
                                                Integração OCPP
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-left">
                                            <Card className="p-8 mt-8">
                                                <p hidden>automação comercial, soluções empresariais automatizadas, eficiência operacional, redução de custos, gestão de estoque automatizada, segurança empresarial, melhoria da experiência do cliente</p>
                                                <h4 className="scroll-m-20 mt-8 text-xl font-semibold tracking-tight">
                                                    Solução Universal com Integração OCPP
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Protocolo OCPP 1.6J e 2.0.1</li>
                                                    <li>Sistemas de gestão de energia</li>
                                                    <li>Integração com soluções existentes</li>
                                                </ul>
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    Flexibilidade de Escolha
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Compra ou aluguel de equipamentos</li>
                                                    <li>Flexibilidade financeira e operacional </li>
                                                </ul>
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    Expertise em Projeto e Instalação
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Instalação confiável baseada em experiência</li>
                                                    <li>Segurança e zero complicações</li>
                                                </ul>

                                            </Card>
                                        </CardContent>
                                        <CardFooter className="grid">
                                            <p className="text-sm text-muted-foreground my-8">
                                                Transforme seu espaço corporativo em um ambiente preparado para o futuro da mobilidade elétrica. Entre em contato hoje mesmo para mais informações e descubra como podemos ajudar a impulsionar sua empresa na direção da sustentabilidade e eficiência energética
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="active:_btn_click"
                                            >
                                                Saiba mais
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="solar">
                                    <Card className="p-8 <md:p-4 bg-secondary/50">
                                        <CardHeader>
                                            <div className="grid grid-place-items-center">
                                                <CardTitle>Soluções de Energia Solar</CardTitle>
                                                <span className="i-ph:solar-panel-duotone scale-150 m-4 text-4xl text-gray-6" />
                                            </div>

                                            <CardDescription>
                                                Economia e Sustentabilidade
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-left">
                                            <Card className="p-8 mt-8">
                                                <p hidden>automação comercial, soluções empresariais automatizadas, eficiência operacional, redução de custos, gestão de estoque automatizada, segurança empresarial, melhoria da experiência do cliente</p>
                                                <h4 className="scroll-m-20 mt-8 text-xl font-semibold tracking-tight">
                                                    Redução de Custos
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Gere sua própria energia</li>
                                                    <li>Reduza a dependência da concessionária de energia</li>
                                                </ul>
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    Retorno Financeiro
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Reduza os custos operacionais</li>
                                                    <li>Aumente a lucratividade na sua empresa</li>
                                                </ul>
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    Eficiência Energética
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Energia limpa</li>
                                                    <li>Reduza o desperdício</li>
                                                    <li>Aumente a produtividade</li>
                                                </ul>

                                            </Card>
                                        </CardContent>
                                        <CardFooter className="grid">
                                            <p className="text-sm text-muted-foreground my-8">
                                                Transforme seu lar ou seu negócio com energia solar. Entre em contato hoje mesmo para saber mais!                                            </p>
                                            <Button
                                                variant="outline"
                                                className="active:_btn_click"
                                            >
                                                Saiba mais
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="emergencia">
                                    <Card className="p-8 <md:p-4 bg-secondary/50">
                                        <CardHeader>
                                            <div className="grid grid-place-items-center">
                                                <CardTitle>Soluções Avançadas em Sistemas de Emergência</CardTitle>
                                                <span className="i-material-symbols:emergency-heat scale-150 m-4 text-4xl text-gray-6" />
                                            </div>

                                            <CardDescription>
                                                Proteja seu condomínio ou empresa
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="text-left">
                                            <Card className="p-8 mt-8">
                                                <p hidden>automação comercial, soluções empresariais automatizadas, eficiência operacional, redução de custos, gestão de estoque automatizada, segurança empresarial, melhoria da experiência do cliente</p>
                                                <h4 className="scroll-m-20 mt-8 text-xl font-semibold tracking-tight">
                                                    Segurança Completa
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Detecção precoce de fumaça e calor</li>
                                                    <li>Alarmes sonoros e visuais</li>
                                                    <li>Dispositivos de supressão (sprinklers e extintores)</li>
                                                </ul>
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    Conformidade com Normas Rigorosas
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Estrita conformidade com todas as normas e regulamentações de segurança</li>
                                                </ul>
                                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                    Detecção Rápida e Precisa
                                                </h4>
                                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                                    <li>Detecta incêndios com precisão, minimizando falsos alarmes</li>
                                                    <li>Reduza os danos causados pelo fogo com um menor tempo de resposta</li>
                                                </ul>

                                            </Card>
                                        </CardContent>
                                        <CardFooter className="grid">
                                            <p className="text-sm text-muted-foreground my-8">
                                                Entre em contato conosco hoje mesmo para proteger seu patrimônio com nossas soluções de segurança contra incêndios.                                      </p>
                                            <Button
                                                variant="outline"
                                                className="active:_btn_click"
                                            >
                                                Saiba mais
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </section>

                    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 drop-shadow-xl">
                        <div className="grid grid-items-center grid-justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Vantagens
                                </h2>
                            </div>
                            <div className="grid w-full grid-flow-col <md:grid-flow-row grid-cols-center grid-items-start gap-6">
                                <Card className="max-w-xs">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Velocidade</CardTitle>
                                            <span className="i-pajamas:dashboard m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Agilidade na hora de solicitar
                                            qualquer operação ou serviço.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>

                                    </CardContent>
                                </Card>
                                <Card className="max-w-xs">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Segurança</CardTitle>
                                            <span className="i-tdesign:secured m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Altos padrões de segurança
                                            proporcionam zero preocupações.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>

                                    </CardContent>
                                </Card>
                                <Card className="max-w-xs">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Escalável</CardTitle>
                                            <span className="i-carbon:chart-stacked m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Software robusto que não desaponta
                                            em grandes picos de uso.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>

                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    <section id="prices" className="w-full py-12 md:py-24 lg:py-32 border-t drop-shadow-xl">
                        <div className="px-4 md:px-6">
                            <div className="grid gap-10 px-10 md:gap-16">
                                <div className="space-y-4 grid">
                                    <h2 className="lg:leading-tight text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                        Tenha um produto eficiente e com muitos benefícios
                                    </h2>
                                    <Table>
                                        <TableCaption>Tabela de benefícios</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Invoice</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Method</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {invoices.map((invoice) => (
                                                <TableRow key={invoice.invoice}>
                                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow>
                                                <TableCell colSpan={3}>Total</TableCell>
                                                <TableCell className="text-right">$2,500.00</TableCell>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </div>
                                <div className="flex flex-col items-start space-y-4">
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Garantia
                                    </div>
                                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                        Conteúdo com tags SEO comprovando a garantia e eficácia do produto...
                                    </p>
                                    <a
                                        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Entenda mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="bg-gray-100 dark:bg-gray-800">
                        <section id="subscribe" className="w-full py-12 md:py-24 lg:py-32 drop-shadow-xl">
                            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                                <div className="space-y-3">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Inscreva-se e tenha acesso aos
                                        benefícios.
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Receba atualizações e vantagens
                                        cadastrando seu e-mail.
                                    </p>
                                </div>
                                <div className="flex w-full max-w-md mx-auto items-center justify-center space-x-2">
                                    <NewsletterForm />
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <footer className="w-full py-12">
                <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-10 md:flex-row">
                    <p className="text-sm tracking-wide">
                        © 2022 - {getCurrentYear()} H2 Sistemas Inteligentes
                    </p>
                    <p className="text-sm tracking-wide">
                        contato@h2si.com.br
                    </p>
                    <div className="grid grid-cols-3 items-center justify-center gap-4 md:grid-cols-3">
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Privacidade
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Termos
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Política
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
