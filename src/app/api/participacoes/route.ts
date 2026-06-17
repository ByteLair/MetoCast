import { NextResponse } from "next/server";

// PARTICIPAÇÕES — rota desativada temporariamente
// Para reativar: remover o export GET abaixo e descomentar o bloco /* === PARTICIPAÇÕES === */
export function GET() {
  return NextResponse.json({ error: "Não disponível." }, { status: 404 });
}

/* === PARTICIPAÇÕES (DESATIVADO) ===

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// GET /api/participacoes — list all participações (public, newest first)
export async function GET() {
  const participacoes = await prisma.participacao.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return NextResponse.json(participacoes);
}

=== FIM PARTICIPAÇÕES (DESATIVADO) === */
