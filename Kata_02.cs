using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeKata
{
    public class Kata_02
    {
        public int solution(int num1, int num2)
        {
            num1 = Math.Clamp(num1, 0,100);
            num2 = Math.Clamp(num2, 0,100);


            int answer = num1 * num2;
            return answer;
        }

        public void Print(int a, int b)
        {
            Console.WriteLine(solution(a, b));
        }
    }
}
