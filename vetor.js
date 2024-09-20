import java.util.Scanner;
import java.util.Arrays;

public class VetorOrdenadoBusca {

    // Função para verificar se o vetor está ordenado
    public static boolean estaOrdenado(int[] vetor) {
        for (int i = 0; i < vetor.length - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                return false;
            }
        }
        return true;
    }

    // Função para busca binária (caso o vetor esteja ordenado)
    public static int buscaBinaria(int[] vetor, int chave) {
        int esquerda = 0;
        int direita = vetor.length - 1;
        while (esquerda <= direita) {
            int meio = (esquerda + direita) / 2;
            if (vetor[meio] == chave) {
                return meio;
            } else if (vetor[meio] < chave) {
                esquerda = meio + 1;
            } else {
                direita = meio - 1;
            }
        }
        return -1; // Retorna -1 se não encontrou
    }

    // Função para busca linear (caso o vetor não esteja ordenado)
    public static int buscaLinear(int[] vetor, int chave) {
        for (int i = 0; i < vetor.length; i++) {
            if (vetor[i] == chave) {
                return i;
            }
        }
        return -1; // Retorna -1 se não encontrou
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] vetor = new int[10];

        // Solicitar 10 valores do usuário
        System.out.println("Digite 10 valores para o vetor:");
        for (int i = 0; i < 10; i++) {
            vetor[i] = scanner.nextInt();
        }

        // Verificar se o vetor está ordenado
        boolean ordenado = estaOrdenado(vetor);
        if (ordenado) {
            System.out.println("O vetor está ordenado.");
        } else {
            System.out.println("O vetor não está ordenado.");
        }

        // Loop para realizar buscas no vetor
        char continuar = 'S';
        while (continuar == 'S' || continuar == 's') {
            System.out.println("Digite o elemento a ser encontrado:");
            int elemento = scanner.nextInt();
            int posicao;

            // Usar a busca adequada dependendo se o vetor está ordenado ou não
            if (ordenado) {
                posicao = buscaBinaria(vetor, elemento);
            } else {
                posicao = buscaLinear(vetor, elemento);
            }

            // Verificar se o elemento foi encontrado
            if (posicao != -1) {
                System.out.println("Elemento encontrado na posição: " + posicao);
            } else {
                System.out.println("Elemento não encontrado.");
            }

            // Perguntar se o usuário deseja continuar
            System.out.println("Deseja continuar a busca? (S/N):");
            continuar = scanner.next().charAt(0);
        }

        scanner.close();
    }
}
