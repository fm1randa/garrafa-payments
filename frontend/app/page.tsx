import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cofre Social
          </h1>
          <p className="text-xl text-gray-600">
            Conectando doadores a beneficiários de forma segura e transparente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Para Doadores</CardTitle>
              <CardDescription>
                Faça a diferença na vida de alguém hoje
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Heart className="text-red-500" size={20} />
                  <span>Doações únicas ou recorrentes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="text-red-500" size={20} />
                  <span>Processo seguro e transparente</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Quero Doar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Para Beneficiários</CardTitle>
              <CardDescription>
                Receba ajuda de forma ágil e sem burocracia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Heart className="text-red-500" size={20} />
                  <span>Pagamento direto de contas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="text-red-500" size={20} />
                  <span>Processo simplificado</span>
                </li>
              </ul>
              <Button className="w-full mt-6" variant="outline">
                Cadastrar-se
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
