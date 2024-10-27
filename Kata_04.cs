using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeKata
{
    internal class Kata_04
    {
        public int solution(int age)
        {
            age = Math.Clamp(age, 0, 120);
            int answer = 2023-age;
            return answer;
        }

        public void Print(int value)
        {
            Console.WriteLine(solution(value));
        }
    }
}
