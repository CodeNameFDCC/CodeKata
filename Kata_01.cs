using System; 

public class Kata_01
{
    public int solution(int num1, int num2) => num1 - num2;

    public void Print(int a, int b)
    {
        var temp = solution(a, b);
        Console.WriteLine(temp);
    }
}

