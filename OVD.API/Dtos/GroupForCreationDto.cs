﻿using System;
using System.Collections.Generic;

namespace OVD.API.Dtos
{
    public class GroupForCreationDto
    {
        public String Name { get; set; }
        public String VMChoice { get; set; }
        public String Protocol { get; set; }
        public int MaxVms { get; set; }
        public int MinVms { get; set; }
        public int Ram { get; set; }
        public int Cpu { get; set; }
        public int NumHotspares { get; set; }
        public IList<String> Dawgtags { get; set; }
    }
}
