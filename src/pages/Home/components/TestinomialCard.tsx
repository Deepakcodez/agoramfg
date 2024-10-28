import { Quote } from "lucide-react"

const TestinomialCard: React.FC = () => {
    return (
        <div className="bg-gradient-to-b from-blue-100/50 to-white border shadow-md  rounded-xl  md:min-w-[30rem] min-w-[15rem] p-4 py-8 hover:bg-gradient-to-b hover:from-blue-100/75 hover:to-white transition duration-1000 ease-in- ">
            <Quote size={25} fill="red" stroke="0" />
            <h1 className="mt-2 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia necessitatibus ea quo, minus dolor, repellat magni atque illum aspernatur, quos eligendi praesentium. Ratione dolores omnis atque dolorem, explicabo tempore eos quam, impedit aut asperiores distinctio dolor voluptates enim, vitae commodi quae magni voluptas repellat dicta voluptatem ipsa molestias debitis!
            </h1>

            <h1 className="pt-4 font-semibold "> Deepak</h1>
        </div>
    )
}
export default TestinomialCard