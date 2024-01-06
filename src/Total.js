export default function Total({nums})
{   let Addition=0;
    for(let i=0;i<nums.length;i++)
    {
        {Addition+=nums[i]};
    }

    return(
        <p>
            Sum={Addition}
        </p>
    )
}